import { useGLTF, Text } from "@react-three/drei";
import { BallCollider, Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import { useEffect, useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three"

function Origin(){
  return (
    <>
      <RigidBody position={[0,0,0]} type="kinematicPosition" scale={0.1}>
        <mesh>
          <sphereGeometry args={[1,8,8]} />
          <meshNormalMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </>
  )
}

function Models(){
  const vec = new THREE.Vector3()
  const api = useRef(null);
  const nodes = useGLTF("/models/astronunt_03.glb")
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
    <RigidBody mass={0.1} linearDamping={3} angularDamping={1} friction={0} position={[10,-5,0]} ref={api} colliders={false} dispose={null} restitution={0}>
      <BallCollider args={[1]} />
      <CylinderCollider rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 1.2]} args={[0.15, 0.27]} />
      <group>
        <primitive object={nodes.scene} scale={[0.23,0.23,0.23]} />
      </group>
    </RigidBody>
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
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

export default function Experience(){
  const { width,height } = useThree((state)=> state.viewport)
  useEffect(()=>{
    console.log(width/9)
  },[])
  return (
    <>
      <Physics gravity={[0,0,0]}>
        <Origin />
        <Pointer />
        <Models />
      </Physics>

      <Text
        scale={Math.min((width/5),3)}
        position={[ 0, Math.min(((width/9)+4),5), -15]}
        font="\fonts\Merriweather-Black.ttf"
      >
        First step is 
        <meshBasicMaterial color={"#123456"} toneMapped={ false }/>
      </Text>
      <Text
        scale={Math.min((width/5),3)}
        position={[ 0, (-width/9)+4, -15]}
        font="\fonts\Merriweather-Black.ttf"
      >
        difficult to start.
        <meshBasicMaterial color={"#123456"} toneMapped={ false }/>
      </Text>
    </>
  )
}