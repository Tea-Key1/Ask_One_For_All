import { Text, PresentationControls, useAnimations } from "@react-three/drei";
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { Fragment, useEffect, useRef } from "react"
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

function Origin() {
  return (
    <Fragment>
      <RigidBody position={[0, 0, 0]} type="kinematicPosition" scale={0.1}>
        <mesh>
          <sphereGeometry args={[1, 8, 8]} />
          <meshStandardMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </Fragment>
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
  const { width, height } = useThree((state) => state.viewport)

  const Animal = useLoader(GLTFLoader, "/models/Balloon_01.glb")


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
    <Fragment>
      <RigidBody mass={0.1} linearDamping={3} angularDamping={1} friction={0} position={[-10, -5, 0]} ref={api} colliders={false} dispose={null} restitution={0}>
        <BallCollider args={[1]} />
        <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2]} args={[0.15, 0.27]} />
        <mesh>
          <primitive object={Animal.scene} scale={0.6} rotation={[0, Math.PI / 4, 0]} />
        </mesh>
      </RigidBody>

      <Text
        scale={Math.min((width / 5), 3)}
        position={[0, Math.min(((width / 9) + 4), 5), -15]}

        font="\fonts\ZenMaruGothic-Black.ttf"
      >
        First step is
        <meshBasicMaterial color={"#2B2730"} toneMapped={false} />
      </Text>
      <Text
        scale={Math.min((width / 5), 3)}
        position={[0, (-width / 9) + 4, -15]}
        font="\fonts\ZenMaruGothic-Black.ttf"
      >
        difficult to start.
        <meshBasicMaterial color={"#2B2730"} toneMapped={false} />
      </Text>
    </Fragment>
  )
}

function PC() {
  const pc = useLoader(GLTFLoader, "/models/pc_sample_02.glb")
  const animations = useAnimations(pc.animations, pc.scene)
  const { width } = useThree((state) => state.viewport)

  useEffect(() => {
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
  }, [])

  return (<Fragment>

    <PresentationControls
      config={{ mass: 2, tension: 500 }}
      snap={{ mass: 2, tension: 500 }}
      polar={[-Math.PI / 24, Math.PI / 24]}
      azimuth={[-Math.PI / 24, Math.PI / 24]}>
      <mesh>
        <primitive object={pc.scene} scale={Math.min(2, 0.15 * width)} position={[-0.2 * width, -17, 0]} rotation={[0.3, 0.5, 0]} />
      </mesh>
    </PresentationControls>
  </Fragment>)
}

function Bottle(props) {
  const bottle = useLoader(GLTFLoader, "/models/bottle_sample_01.gltf", loader => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    loader.setDRACOLoader(dracoLoader)
  })
  const { width } = useThree((state) => state.viewport)
  const { bottleColor } = props
  const bottleRef = useRef()
  useFrame((clock, delta) => {
    bottleRef.current.rotation.y += delta * 0.5
  })
  useEffect(() => {
    if (width < 17) {
      bottleRef.current.position.set(0, -30, 0);
    } else {
      bottleRef.current.position.set(0.2 * width, -33, 0);
    }
    console.log(bottle)
  }, [])
  useEffect(() => {
    if (width < 17) {
      bottleRef.current.position.set(0, -30, 0);
    } else {
      bottleRef.current.position.set(0.2 * width, -33, 0);
    }
  }, [width]);
  return (<Fragment>
    <group ref={bottleRef} scale={Math.min(2, 0.15 * width)} position={[0.2 * width, -33, 0]} rotation={[0.3, 0, 0]}>
      <mesh geometry={bottle.scene.children[0].geometry}>
        <meshStandardMaterial color={bottleColor} transparent opacity={0.5} />
      </mesh>
      <mesh geometry={bottle.scene.children[1].geometry}>
        <meshPhysicalMaterial color={"#987654"} metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh geometry={bottle.scene.children[2].geometry}>
        <meshStandardMaterial color={"#000000"} />
      </mesh>
    </group>
  </Fragment>)
}

export default function Experience(props) {
  const { bottleColor } = props
  return (
    <Fragment>
      <Physics gravity={[0, 0, 0]}>
        <Origin />
        <Pointer />
        <Animal />
      </Physics>

      <PC />
      <Bottle bottleColor={bottleColor} />

    </Fragment>
  )
}