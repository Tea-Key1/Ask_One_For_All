import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Document() {
    return (
        <motion.div className="screen w-screen flex flex-col"
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
            <div className="container px-5 py-24 mx-auto flex flex-col align-middle justify-center">
                <div className="text-center mb-20">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">サービス紹介資料</h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">下記の内容についてまとめた資料をご用意いたしました。<br />また、ご不明な点がございましたらお気軽にお問い合わせください。</p>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">

                        <motion.img src="/textures/Users.svg" className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                            initial={{
                                opacity: 0,
                                y: -50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0
                            }}
                        />
                        <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
                            <div className="flex-grow">
                                <h2 className="text-lg font-bold mb-5">現状分析</h2>
                                <p className="leading-relaxed text-base text-start">現従来のWebサイトが抱える課題に照らし合わせ、これからの課題解決に向けた新たなアプローチを提案いたします。2023年の日本において、新たに展開されるウェブサイトの約3分の1がノーコードプラットフォームを用いて構築されると言われています。この動向は、ウェブ制作のハードルが低下し、クリエイティビティを活かしたサイト構築の可能性が広がっている素晴らしい側面を示しています。しかしながら、この変化は同時に新たな課題も浮き彫りにしました。</p>

                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">

                        <motion.img src="/textures/BuildingOffice.svg" className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                            initial={{
                                opacity: 0,
                                y: -50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 0.5
                            }}
                        />

                        <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
                            <div className="flex-grow">
                                <h2 className="text-lg font-bold mb-5">当組織の強み・特徴</h2>
                                <p className="leading-relaxed text-base text-start">私たちの存在意義は、技術の進化を通じて困難を乗り越え、新たな可能性を切り拓くことです。当組織は3Dモデル制作とWeb制作を結びつけることで、魅力的な視覚体験を提供しつつ、ユーザーがストレスなくサイトを活用できるデザインを追求します。その強みを生み出すために、3つの要素を根ざしています。</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">

                        <motion.img src="/textures/Wallet.svg" className="w-20 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                            initial={{
                                opacity: 0,
                                y: -50
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 1,
                                delay: 1
                            }}
                        />
                        <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
                            <div className="flex-grow">
                                <h2 className="text-lg font-bold mb-5">時間・費用</h2>
                                <p className="leading-relaxed text-base">現代のビジネス環境において、最新技術を活用したWebサイトは大きな効果をもたらしますが、その実現には一定のコストが伴います。こうした認識のもと、当組織はお客様の成長を妨げず、かつ可能な限り負担を軽減するため、初期費用を抑えるプランを提供しています。私たちの目指すのは、高品質なウェブサイトを実現しつつ、お客様の予算に合わせた柔軟な解決策を提供することです。私たちは、初期費用を最小限に抑えながらも、妥協のない品質を保ち、お客様のビジョンと目標を達成するための最良の方法を模索しています。</p>
                            </div>
                        </div>
                    </div>

                </div>
                <a href="/documents/document.pdf" className="flex justify-center items-center mx-auto my-16 px-10 py-2 text-lg text-center rounded-xl border-x-2 border-black hover:bg-gray-100 transition duration-300">
                    資料請求<br />ダウンロード
                    <img src="/textures/DocumentArrowDown.svg" className="w-10 h-10 flex rounded-full flex-shrink-0" />
                </a>
                <div className="my-10 flex items-center justify-center">
                <Link to="/">
            <button className="px-5 py-4 text-base font-bold text-center lg:px-10 rounded-xl border-t-2 border-gray-700 shadow hover:bg-bg-pink-thin hover:text-gray-500 transition duration-500">
              ホームに戻る
            </button>
          </Link>
                </div>
            </div>



        </motion.div>
    )
}