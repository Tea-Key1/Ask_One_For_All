import { Canvas, useFrame } from "@react-three/fiber";
import Experience from "./Experience.jsx";
import { Environment, Html, Scroll, ScrollControls, useProgress } from "@react-three/drei";
import Interface from "./Interface";
import { Suspense, useRef, Component } from "react";


export default function Home (){
    return(
        <>
            <Canvas
                className="Canvas"
                shadows
                camera={{ fov: 45, near: 1, far: 100, position: [0,0,20] }}
                onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
            >
                <Suspense fallback={<Loading />}>
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
                </Suspense>
            </Canvas>
        </>
    )
}

const Loading =()=> {
    const {progress} = useProgress()
    const divRef = useRef();

    useFrame(() => {
        const newRotation = (progress * 360) / 100; // Convert progress to degrees
        if (divRef.current) {
          divRef.current.style.transform = `rotate(${newRotation}deg)`;
        }
    });

    return (
        <Html center>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="font-bold">Now<br />{Math.floor(progress)} % loaded</div>
                <img ref={divRef} src="\textures\IMG_3367_w_trans.svg" className="w-20 h-20 p-2 rounded-full"/>
            </div>
        </Html>
    );
}