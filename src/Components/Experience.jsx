import { useGLTF, Text, PresentationControls, ContactShadows, useAnimations } from "@react-three/drei";
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { extend, useFrame, useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three"
import { shaderMaterial } from "@react-three/drei";
import glsl from "glslify";

import img from "/textures/flower.jpg";


const WaveShaderMaterial = shaderMaterial(
  // Uniform
  { uColor: new THREE.Color(0.5, 0.5, 0.5),
    uTime : 0,
    uTexture: new THREE.TextureLoader().load(img)
  },
  // VertexShader
  glsl`
  precision mediump float;

  varying vec2 vUv;
  uniform float uTime;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
    vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

    // Permutations
    i = mod289(i);
    vec4 p = permute( permute( permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    // Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),dot(p2,x2), dot(p3,x3) ) );
  }

void main() {
  vUv = uv;

  vec3 pos = position;
  float noiseFreq = 1.5;
  float noiseAmp = 0.15; 
  vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
  pos.z += snoise(noisePos) * noiseAmp;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    uniform sampler2D uTexture;

    void main() {
      vec3 texture = texture2D(uTexture, vUv).rgb;
      gl_FragColor = vec4(texture, 0.4);
    }
  `
)

extend({ WaveShaderMaterial })

function Origin() {
  return (
    <>
      <RigidBody position={[0, 0, 0]} type="kinematicPosition" scale={0.1}>
        <mesh>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  )
}

function Pointer() {
  const vec = new THREE.Vector3()
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    vec.lerp({ x: (mouse.x * viewport.width) / 2, y: (mouse.y * viewport.height) / 2, z: 0 }, 0.2)
    ref.current?.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1.5]} />
    </RigidBody>
  )
}

function Animal() {
  const vec = new THREE.Vector3()
  const api = useRef(null);
  const Animal = useGLTF("/models/Balloon_01.glb")

  useFrame((state, delta) => {
    if (api.current) {
      delta = Math.min(0.01, delta)
      api.current.applyImpulse(
        vec
          .copy(api.current.translation())
          .normalize()
          .multiply({ x: -50 * delta, y: -200 * delta, z: -50 * delta }),
      )
    }
  })

  return (
    <RigidBody mass={0.1} linearDamping={3} angularDamping={1} friction={0} position={[-10, -5, 0]} ref={api} colliders={false} dispose={null} restitution={0}>
      <BallCollider args={[1]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2]} args={[0.15, 0.27]} />
      <group>
        <primitive object={Animal.scene} scale={0.6} rotation={[0, Math.PI / 4, 0]} />
      </group>
    </RigidBody>
  )
}

function PC(props) {
  const pc = useGLTF("/models/pc_sample_02.glb")
  const { width } = props
  const animations = useAnimations(pc.animations, pc.scene)

  useEffect(()=>{
    console.log(animations.actions, animations.actions.keyAction001,animations.actions.textAction002)
    animations.actions.enterAction.play()
    animations.actions.mouseAction.play()
    animations.actions.keyAction001.play()
    animations.actions.keyAction002.play()
    animations.actions.keyAction003.play()
    animations.actions.keyAction004.play()
    animations.actions.keyAction005.play()
    animations.actions.keyAction006.play()
    animations.actions.keyAction007.play()
    animations.actions.keyAction008.play()
    animations.actions.keyAction009.play()
    animations.actions.keyAction010.play()
    animations.actions.keyAction011.play()
    animations.actions.keyAction012.play()
    animations.actions.textAction001.play()
    animations.actions.textAction_002.play()
    animations.actions.textAction003.play()
    animations.actions.textAction004.play()
    animations.actions.textAction005.play()
    animations.actions.textAction006.play()
    animations.actions.textAction007.play()
    animations.actions.textAction008.play()
    animations.actions.textAction009.play()
    animations.actions.textAction010.play()
    animations.actions.textAction011.play()
    animations.actions.textAction012.play()
    animations.actions.textAction013.play()
  },[])

  return (<>
    <group >
      <PresentationControls
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 2, tension: 500 }}
        polar={[-Math.PI / 24, Math.PI / 24]}
        azimuth={[-Math.PI / 24, Math.PI / 24]}>
        <primitive object={pc.scene} scale={Math.min(2, 0.15 * width)} position={[-0.2 * width, -17, 0]} rotation={[0.3, 0.5, 0]} />
      </PresentationControls>
    </group>
  </>)
}

function Bottle(props) {

  return (<>

  </>)
}



export default function Experience() {
  const { width, height } = useThree((state) => state.viewport)
  const waveRef = useRef()

  // useFrame(({clock})=>(waveRef.current.uTime=clock.getElapsedTime()))

  return (
    <>
      <Physics gravity={[0, 0, 0]}>
        <Origin />
        <Pointer />
        <Animal />
      </Physics>

      <PC width={width} />
      <Bottle width={width} />


      <Text
        scale={Math.min((width / 5), 3)}
        position={[0, Math.min(((width / 9) + 4), 5), -15]}
        font="\fonts\Merriweather-Black.ttf"
      >
        First step is
        <meshBasicMaterial color={"#2B2730"} toneMapped={false} />
      </Text>
      <Text
        scale={Math.min((width / 5), 3)}
        position={[0, (-width / 9) + 4, -15]}
        font="\fonts\Merriweather-Black.ttf"
      >
        difficult to start.
        <meshBasicMaterial color={"#2B2730"} toneMapped={false} />
      </Text>

      {/* <mesh position={[-6,-20,-5]}>
        <planeGeometry args={[width*0.5,height*0.5,16,16]}/>
        <waveShaderMaterial ref={waveRef} uColor={"hotpink"} uTime transparent/>
      </mesh> */}
    </>
  )
}