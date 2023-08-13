import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./Interface";

export default function App(){
    return(
        <>
            <Canvas
                className="Canvas"
                shadows
                camera={{ fov: 45, near: 1, far: 100, position: [0,0,20] }}
                onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
            >
                {/* <gradientBackground args={['red', 'white']} /> */}
                <ambientLight intensity={1} />
                <ScrollControls pages={4} damping={0.3}>
                    <Scroll>
                        <Experience />
                    </Scroll>
                    <Scroll html>
                        <Interface />
                    </Scroll>
                </ScrollControls>
                <Environment preset="city" />
            </Canvas>
        </>
    )
}