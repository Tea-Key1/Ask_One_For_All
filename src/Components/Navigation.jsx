import { useWindowSize } from "@react-hook/window-size"
import { motion } from "framer-motion"
import { useEffect, useRef } from "react"


export default function Navigation(props) {
    const { setSection, menuOpen, setMenuOpen } = props
    const menuRef = useRef()
    const [width] = useWindowSize({ fps: 60 });

    useEffect(() => {
        if (!menuRef.current) return;
        if (menuOpen) {
            menuRef.current.style.display = "block";
        } else {
            menuRef.current.style.display = "none";
        }
    }, [menuOpen])

    return (
        <>
            <motion.nav className="absolute h-auto w-screen z-10 bg-bg-pink-thin"
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1
                }}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-around mx-auto">
                    <a href="/" className="flex items-center py-4 px-3 rounded-xl hover:bg-white hover:text-red-300 hover:translate-y-[-5px] transition duration-500">
                        <img src="/textures/astronauts.svg" className="h-10 w-10 mr-3" />
                        <span className="self-center text-2xl font-semibold" style={{translate: "no"}}>Ask One</span>
                    </a>



                        <div className="hidden md:flex md:flex-row rounded-lg">
                            <SectionButton label="ホーム" onClick={() => setSection(0)} />
                            <SectionButton label="はじめまして" onClick={() => setSection(1)} />
                            <SectionButton label="サービス紹介" onClick={() => setSection(2)} />
                            <SectionButton label="制作の流れ" onClick={() => setSection(3)} />
                            <SectionButton label="コスト" onClick={() => setSection(4)} />
                            <SectionButton label="組織概要" onClick={() => setSection(5)} />
                            <a href="/document" className="block mr-6 p-5 rounded-xl border-4 border-blue-100 hover:bg-blue-100 hover:text-blue-400 hover:translate-y-[-5px] transition duration-500">資料請求</a>
                        </div>


                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="w-auto inline-flex flex-col items-center p-2 h-10 justify-center text-sm rounded-lg md:hidden"
                    // aria-controls="navbar-default"
                    // aria-expanded="false"
                    >
                        <div className="inline">menu</div>
                        <img aria-hidden="true" src="/textures/menu.svg" />
                    </button>

                </div>
            </motion.nav>

            {width <= 768 && (
                <motion.div
                    className="absolute right-5 top-20 w-40 z-20 rounded-md shadow-xl md:hidden bg-white"
                    ref={menuRef}
                    initial={{
                        x: 50,
                    }}
                    whileInView={{
                        x: 0,
                    }}
                >
                    <a onClick={() => { setSection(0); setMenuOpen(!menuOpen) }} className="block px-4 py-3">ホーム</a>
                    <a onClick={() => { setSection(1); setMenuOpen(!menuOpen) }} className="block px-4 py-3">はじめに</a>
                    <a onClick={() => { setSection(2); setMenuOpen(!menuOpen) }} className="block px-4 py-3">サービス紹介</a>
                    <a onClick={() => { setSection(3); setMenuOpen(!menuOpen) }} className="block px-4 py-3">プロセス</a>
                    <a onClick={() => { setSection(4); setMenuOpen(!menuOpen) }} className="block px-4 py-3">費用</a>
                    <a onClick={() => { setSection(5); setMenuOpen(!menuOpen) }} className="block px-4 py-3">組織概要</a>
                    <a href="/document" className="block border-t-2 border-blue-100 px-4 py-3"> 資料請求 </a>
                </motion.div>
            )}
        </>
    )
}

const SectionButton = (props) => {
    const { label, onClick } = props;
    return (
        <button
            type="button"
            onClick={onClick}
            className="block p-5 rounded-xl hover:bg-white hover:text-pink-300 hover:translate-y-[-5px] transition duration-500"
        >
            {label}
        </button>
    );
};
