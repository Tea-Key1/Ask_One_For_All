import { useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useEffect } from "react";
import ReactTyped from "react-typed";

const Section = (props) => {
  const { children } = props;

  return (
    <>
      <section className=
        "h-screen w-screen p-8 max-w-screen-2xl max-auto flex flex-col items-start justify-center"
      >{children}</section>
    </>
  )
}

export default function Interface() {
  return (
    <>
      <div className="flex flex-col items-center w-screen" >
        <AboutSection />
        <Introduction />
        <Service />
        <Process />
        <Cost />
        <FooterSection />
      </div>
    </>
  )
}

const AboutSection = () => {
  return (
    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto flex flex-col relative text-center ">
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="absolute bottom-1/3 flex justify-center items-center">
          <ReactTyped
            className="font-bold md:text-4xl sm:text-3xl text-xl"
            strings={["モデルにタッチ", "touch to a model"]}
            startDelay={1000}
            typeSpeed={40}
            backDelay={2000}
            backSpeed={40}
            loop
          />
          <img
            src="/textures/point.svg"
            viewBox="0 0 100 100"
            width="30"
            height="30"
            className="inline-block"
          />
        </div>
      </motion.div>
    </section>
  );
}

const Introduction = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto flex flex-flow relative text-center">
      {width >= 11 ?
        (<div className="h-full w-full"></div>) : null}



      <div className="h-70% w-full flex flex-col bg-white rounded-2xl body-font container justify-around px-5 mt-5 py-24 mx-auto">
        <div className="flex items-center lg:w-80% mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">

          <motion.div className="flex-grow sm:text-left text-start mt-6 sm:mt-0"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 1,
            }}
          >
            <h2 className="mb-4 text-2xl font-bold md:mb-6 lg:text-3xl sm:text-2xl">3D × ホームページ × Ask One</h2>
            <p className="lg:text-lg lg:leading-10 sm:text-sm ">はじめまして。私たちは、お客様の課題解決とブランド力向上に真摯に向き合う姿勢を持ち、3D技術を駆使したホームページ制作を提供しています。<br /><br />お客様の大切な商品やサービスを、より魅力的に、より効果的に表現し、そして共に成長していくためのお手伝いをさせていただけますか？</p>
          </motion.div>

        </div>
        <div className="flex items-center lg:w-80% mx-auto border-b pb-10 border-gray-200 sm:flex-row flex-col">
          <motion.div className="flex-grow sm:text-left text-start mt-6 sm:mt-0"
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
            }}
          >
            <h2 className="mb-4 text-2xl font-bold md:mb-6 lg:text-3xl sm:text-2xl">ホームページって難しい？</h2>
            <p className="lg:text-lg lg:leading-10 sm:text-sm">ホームページの制作には、難しさを感じる方もいらっしゃるかもしれません。確かに、SEO、レスポンシブデザインなど、専門的な知識が必要です。日常ではあまり馴染みのない言葉や複雑な概念に触れることもあります。しかし、安心してください。私たちは、分かりやすい言葉で説明し、複雑なプロセスを小さなステップに分けてご案内します。それが、私たちのサービスの特長です。</p>

          </motion.div>

        </div>


      </div>
    </section>
  )
}

const Service = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (<>

    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">
      <div className="container mx-auto ">
        <div className="mx-auto flex flex-wrap-reverse">

          <div className="bg-white lg:w-1/2 w-full lg:px-10 lg:py-6 mt-6 lg:mt-0 rounded-lg">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.25,
                duration: 1,
              }}>
              <h2 className="text-sm title-font tracking-widest">Service</h2>
              <h1 className="text-3xl title-font inline-block mb-4 font-medium pb-2 border-b-2 border-amber-800">ホームページ制作・3Dモデル制作</h1>
              <p className="md:text-lg md:leading-10 sm:text-xs">ホームページ制作に関わる幅広い業務を担当いたします。企画から始まり、仕様書、デザイン、コーディング、既存Webサイトのリニューアルなど、多岐にわたるニーズに対応します。さらに、必要であれば3Dモデルを組み込んだ斬新なアプローチも行います。<br />私たちは、お客様のサービスや商品を魅力的かつ効果的にご紹介するため、細部にまでこだわり、最高の成果を出すために全力を尽くします。</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-cyan-400 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-amber-400 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-pink-400 rounded-full w-6 h-6 focus:outline-none" />
                </div>

              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
        </div>
      </div>
    </section>
  </>)
}

function Process() {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">01 お問い合わせ・ご相談</h2>
                  <p className="text-xs">お問い合わせ内容を下記のメールアドレスより受け付けております。担当者が確認したのち、お打う合せ日程を調整させていただきます。</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">02 要件定義・詳細設計</h2>
                  <p className="text-xs">お客様のご要望をお伺いし、次に行う「制作」に向けた内容についてお話しします。また、難しい言葉や概念がありましたら、そこで十分にご理解いただけるようにいたします。</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">03 制作</h2>
                  <p className="text-xs">ご提示させていただいた金額、内容に問題がないようでしたら、お申込み契約を取り交わし、制作スタートとなります。制作の工程には、仕様の確定、お客様による原稿・写真素材等の準備、デザイン、コーディング、システム構築（CMSの導入やオリジナルシステムの構築がある場合）などがあり、規模によりひと月から半年程度の時間がかかります。</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">04 納品・運用</h2>
                  <p className="text-xs">すべてのページの構築作業が終わりましたら、テスト環境にてお客様にご確認いただき、最終確認と修正を行います。テスト環境でのチェックがすべて終わりましたら、本番環境にアップロードし納品となります。</p>
                </div>
              </div>
            </div>
            {width >= 12 ? <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" /> : null}
          </div>
        </div>
      </section>
    </section>
  )
}

const Cost = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (<>
    {
      width <= 15 ?
        <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">
          <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
              <p className="text-xl text-center text-gray-500 dark:text-gray-300">
                Choose your plan
              </p>

              <h1 className="mt-4 text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Pricing Plan</h1>

              <div className="mt-6 space-y-8 xl:mt-12">
                <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border cursor-pointer rounded-xl dark:border-gray-700">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>

                    <div className="flex flex-col items-center mx-5 space-y-1">
                      <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Basic</h2>

                      <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                        Save 20%
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-500 sm:text-3xl dark:text-gray-300">$49 <span className="text-base font-medium">/Month</span></h2>
                </div>

                <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-blue-500 cursor-pointer rounded-xl">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 sm:h-9 sm:w-9" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>

                    <div className="flex flex-col items-center mx-5 space-y-1">
                      <h2 className="text-lg font-medium text-gray-700 sm:text-2xl dark:text-gray-200">Popular</h2>
                      <div className="px-2 text-xs text-blue-500 bg-gray-100 rounded-full sm:px-4 sm:py-1 dark:bg-gray-700 ">
                        Save 20%
                      </div>
                    </div>
                  </div>

                  <h2 className="text-2xl font-semibold text-blue-600 sm:text-4xl">$99 <span className="text-base font-medium">/Month</span></h2>
                </div>




              </div>
            </div>
          </div>
        </section>
        :
        <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">
          <div className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-8 mx-auto">
              <div className="xl:items-center xl:-mx-8 xl:flex">
                <div className="flex flex-col items-center xl:items-start xl:mx-8">
                  <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">Our Pricing Plan</h1>

                  <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                  </div>

                  <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
                    You can get All Access by selecting your plan!
                  </p>

                  <a href="#" className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>

                <div className="flex-1 xl:mx-8">
                  <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                      <div className="p-6">
                        <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">Essential</h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">$3.00 <span className="text-base font-medium">/Month</span></h2>

                        <p className="mt-1 text-gray-500 dark:text-gray-300">
                          Yearly payment
                        </p>

                        <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                          Start Now
                        </button>
                      </div>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <div class="p-6">
                        <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                        <div className="mt-8 space-y-4">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Mobile app</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                      <div className="p-6">
                        <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">Premium</h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-300">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                        </p>

                        <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">$50.00 <span className="text-base font-medium">/life time</span></h2>

                        <p class="mt-1 text-gray-500 dark:text-gray-300">
                          One time payment
                        </p>

                        <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                          Start Now
                        </button>
                      </div>

                      <hr className="border-gray-200 dark:border-gray-700" />

                      <div className="p-6">
                        <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                        <div className="mt-8 space-y-4">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">All limited links</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Own analytics platform</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Chat support</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Optimize hashtags</span>
                          </div>

                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Mobile app</span>
                          </div>

                          <div className="flex flex-row-reverse items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>

                            <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited users</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    }
  </>

  )
}

const FooterSection = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center justify-around">

      <div className="flex flex-col align-middle items-center justify-center">

        <div className="max-w-2xl shadow shadow-gray-400 sm:rounded-lg bg-white">
          <div className="px-4 py-5 sm:px-6">
            <h3 className=" text-center">
              組織概要
            </h3>
          </div>
          <div className="border-t border-gray-300">
            <dl>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="">
                  組織名
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  Ask One
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="">
                  代表者
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  柳田大記
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="">
                  メールアドレス
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  askone40@gmail.com
                </dd>
              </div>
              <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="">
                  事業内容
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  Webサイト制作・運用保守/3Dモデル制作
                </dd>
              </div>
              <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="">
                  所在地
                </dt>
                <dd className="mt-1 sm:mt-0 sm:col-span-2">
                  〒132-0035 東京都 江戸川区 平井 3丁目16番22号 R-ROOMS HIRAI 402
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>


      <footer className="mb-4 pt-4 sm:pt-10 lg:pt-12 xs:pt-16 mx-auto max-w-screen-2xl px-2 md:px-4 xs:px-6">
        <div className="flex flex-col items-center border-t pt-4 sm:pt-6 xs:pt-8">
          <nav className="mb-2 sm:mb-4 xs:mb-2 flex flex-wrap justify-center gap-x-2 gap-y-1 md:justify-start md:gap-4 xs:gap-x-1 xs:gap-y-0">
            <a href="/question" className="hover:translate-y-[-5px] transition duration-500">よくある質問FAQ</a>
            <a href="/privacy" className="hover:translate-y-[-5px] transition duration-500">個人情報保護に関する方針</a>
          </nav>
          <div className="text-gray-600 body-font">
            <div className="container px-2 py-2 xs:py-3 mx-auto flex items-center justify-center">
              <a className="flex title-font font-medium items-center text-gray-900">
                <img src="\textures\astronauts.svg" className="w-12 h-12 p-1 rounded-full" />
                {width >= 11 ? (
                  <p className="ml-2 text-2lg">
                    Ask One
                  </p>
                ) : null}
              </a>
              <p className="text-2xs text-gray-500 ml-2">
                © 2023 ― Ask One —
                <a className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">askone40@gmai.com</a>
              </p>
              <span className="inline-flex ml-2">
                <a href="https://twitter.com/Ask_One_For_All">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-2 text-gray-500">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>


    </section>
  )
}
