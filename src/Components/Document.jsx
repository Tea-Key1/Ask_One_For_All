import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function About() {
    return (
        <motion.div className="h-screen w-screen flex flex-col items-center justify-start bg-opacity-100"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
        >
            <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="mx-auto p-8 max-auto max-w-screen-2xl px-4 md:px-8">
                    
                <a href="/documents/document.pdf" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" download>資料請求</a>


                </div>
                <div className="my-20 flex items-center justify-center">
                    <Link to="/">
                        <button className="px-5 py-4 text-base font-bold text-center transition duration-500 ease-in-out transform bg-white lg:px-10 rounded-xl hover:bg-blue-400 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:ring-white">
                            ホームに戻る
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}