import { motion } from "framer-motion"

export default function Navigation(props){
    const { setSection } = props
    return(
        <motion.nav className="absolute w-screen z-50 bg-bg-pink-thin"
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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
                <img src="/textures/astronauts.svg" className="h-10 w-10 mr-3 filter brightness-100" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">Ask One</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="w-auto inline-flex flex-col items-center p-2 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <div className="inline">menu</div>
                <img aria-hidden="true" src="/textures/menu.svg" />
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mr-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li><SectionButton label="ホーム" onClick={() => setSection(0)} /></li>
                    <li><SectionButton label="サービス" onClick={() => setSection(1)} /></li>
                    <li><SectionButton label="実績" onClick={() => setSection(2)} /></li>
                    <li><SectionButton label="組織概要" onClick={() => setSection(3)} /></li>
                </ul>
            </div>
        </div>
    </motion.nav>
    )
}

const SectionButton = (props) => {
    const { label, onClick } = props
    return (
        <button type="button" onClick={onClick} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            {label}
        </button>
    )
}