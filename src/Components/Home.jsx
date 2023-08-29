import { Canvas, useThree } from "@react-three/fiber";
import { Environment, Html, Scroll, ScrollControls } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import ReactTyped from "react-typed";
import Experience from "./Experience.jsx";
import Interface from "./Interface";
import ScrollManager from "./ScrollManager.jsx";
import Navigation from "./Navigation.jsx";

export default function Home() {
    const [section, setSection] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <>
 <Navigation setSection={setSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Canvas
                className="Canvas"
                shadows
                camera={{ fov: 45, near: 1, far: 100, position: [0, 0, 20] }}
                onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
            >

                <Suspense fallback={
                    <Html center>
                        <div className="flex flex-col items-center justify-center text-center whitespace-nowrap">
                            <ReactTyped className="w-auto font-bold md:text-5xl sm:text-4xl text-xl" strings={["Loading", "読み込み中"]} typeSpeed={40} backSpeed={40} loop />
                            <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent rounded-full" role="status" aria-label="loading" style={{ color: "#2B2730" }} />
                        </div>
                    </Html>
                }>
                    <ambientLight intensity={1} />
                    <ScrollControls pages={6} damping={0.3}>
                        <ScrollManager section={section} onSectionChange={setSection} />
                        <Scroll>
                            <Experience />
                        </Scroll>
                        <Scroll html>
                            <Interface html />
                        </Scroll>
                    </ScrollControls>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
           
        </>
    )
}

// import { Canvas } from "@react-three/fiber";
// import { Environment, Html, Scroll, ScrollControls } from "@react-three/drei";
// import { Suspense, useState,useEffect } from "react";
// import ReactTyped from "react-typed";
// import Experience from "./Experience.jsx";
// import Interface from "./Interface";
// import ScrollManager from "./ScrollManager.jsx";
// import Navigation from "./Navigation.jsx";

// export default function Home() {
//     const [section, setSection] = useState(0);
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [scrollControlsPages, setScrollControlsPages] = useState(6);

//     const handleResize = () => {
//         const width = window.innerWidth;
//         setScrollControlsPages(width <= 700 ? 6.2 : 6);
//     };

//     useEffect(() => {
//         // 初期設定
//         handleResize();
//         window.addEventListener("resize", handleResize); // ウィンドウのリサイズ時に処理を呼び出す
//         return () => {
//             window.removeEventListener("resize", handleResize); // コンポーネントがアンマウントされたときにリスナーを削除
//         };
//     }, []);

//     return (
//         <>
//             <Navigation setSection={setSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
//             <Canvas
//                 className="Canvas"
//                 shadows
//                 camera={{ fov: 45, near: 1, far: 100, position: [0, 0, 20] }}
//                 onCreated={(state) => (state.gl.toneMappingExposure = 1.5)}
//             >
//                 <Suspense fallback={
//                     <Html center>
//                         <div className="flex flex-col items-center justify-center text-center whitespace-nowrap">
//                             <ReactTyped className="w-auto font-bold md:text-5xl sm:text-4xl text-xl" strings={["Loading", "読み込み中"]} typeSpeed={40} backSpeed={40} loop />
//                             <div className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent rounded-full" role="status" aria-label="loading" style={{ color: "#2B2730" }} />
//                         </div>
//                     </Html>
//                 }>
//                     <ambientLight intensity={1} />
//                     <ScrollControls pages={scrollControlsPages} damping={0.5}>
//                         <ScrollManager section={section} onSectionChange={setSection} />
//                         <Scroll>
//                             <Experience />
//                         </Scroll>
//                         <Scroll html>
//                             <Interface html />
//                         </Scroll>
//                     </ScrollControls>
//                     <Environment preset="city" />
//                 </Suspense>
//             </Canvas>
//         </>
//     )
// }
