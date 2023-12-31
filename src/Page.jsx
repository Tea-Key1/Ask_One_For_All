import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Html, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect, Fragment } from "react";
import { useWindowSize } from "@react-hook/window-size"
import ReactTyped from "react-typed";
import Experience from "./Experience.jsx";
import { gsap } from "gsap";
import { motion } from "framer-motion"

export default function Page() {
  const [section, setSection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false)
  const [bottleColor, setBottleColor] = useState("#ffffff")
  const bottleColorChange = (newColor) => { setBottleColor(newColor) }
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
    <Fragment>
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
            <span className="self-center text-2xl font-semibold" style={{ translate: "no" }}>Ask One</span>
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
      {/* <Navigation setSection={setSection} menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
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
              <Experience bottleColor={bottleColor} />
            </Scroll>
            <Scroll html>
              <div className="h-auto w-screen flex flex-col items-center" >
                <Home />
                <Introduction />
                <Service bottleColorChange={bottleColorChange} />
                <Process />
                <Cost />
                <About />
              </div>
            </Scroll>
          </ScrollControls>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </Fragment>
  )
}

const ScrollManager = (props) => {
  const { section, setSection } = props;
  const data = useScroll();
  const lastScroll = useRef(0)
  const isAnimating = useRef(false)
  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute")

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false
      },
    })
  }, [section])

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }
  })
  return null;
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

const Home = () => {
  return (
    <Fragment>
      <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl flex flex-col relative text-center justify-start">
        <div className="h-4/5 w-full" />
        <div className="h-4/5 w-full" />
        <motion.div
          className="h-4/5 w-full"
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
          <div className="flex justify-center items-center">
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
    </Fragment>
  )
}

const Introduction = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Fragment>
      <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl flex flex-flow relative align-middle justify-center">
        {width >= 11 ?
          (<div className="h-full w-full"></div>) : null}
        <div className="h-full w-full flex flex-col justify-center">
          <div className="bg-white h-auto w-full flex flex-col rounded-2xl p-5">
            <h2 className="text-sm title-font tracking-widest">Introduction</h2>
            <div className="flex items-center mx-auto border-b-2 pb-5 border-amber-800 sm:flex-row flex-col">

              <motion.div className="flex-grow sm:text-left text-start sm:mt-0"
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
                <h2 className="mb-4 text-xl font-bold md:mb-6 md:text-xl sm:text-base">3D × ホームページ × Ask One</h2>
                <p className="md:text-lg lg:leading-10 text-xs">はじめまして。私たちは、お客様の課題解決とブランド力向上に真摯に向き合う姿勢を持ち、3D技術を駆使したホームページ制作を提供しています。<br /><br />お客様の大切な商品やサービスを、より魅力的に、より効果的に表現し、そして共に成長していくためのお手伝いをさせていただけますか？</p>
              </motion.div>

            </div>
            <div className="flex items-center mx-auto border-b-2 pb-5 border-amber-800 sm:flex-row flex-col">
              <motion.div className="flex-grow sm:text-left text-start sm:mt-0"
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
                <h2 className="my-4 text-xl font-bold md:mb-6 md:text-xl sm:text-base">ホームページって難しい？</h2>
                <p className="md:text-lg lg:leading-10 text-xs">ホームページの制作には、難しさを感じる方もいらっしゃるかもしれません。確かに、SEO、レスポンシブデザインなど、専門的な知識が必要です。日常ではあまり馴染みのない言葉や複雑な概念に触れることもあります。しかし、安心してください。私たちは、分かりやすい言葉で説明し、複雑なプロセスを小さなステップに分けてご案内します。それが、私たちのサービスの特長です。</p>

              </motion.div>

            </div>

          </div>

        </div>
      </section>
    </Fragment>
  )
}

const Service = (props) => {
  const { width, height } = useThree((state) => state.viewport)

  const bottleColorChange = (event) => {
    props.bottleColorChange(event);
  };

  return (<Fragment>

    <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl max-auto flex md:flex-row flex-col relative align-middle">
      <div className="h-full w-full flex flex-col lg:justify-center justify-end">
        <div className="bg-white h-auto w-full flex flex-col justify-center rounded-2xl p-5 sm:mb-0 mb-10">
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
            <h1 className="md:text-xl text-base font-bold inline-block mb-4 pb-2 border-b-2 border-amber-800">ホームページ制作・3Dモデル制作</h1>
            <p className="md:text-lg lg:leading-10 text-xs">ホームページ制作に関わる幅広い業務を担当いたします。企画から始まり、仕様書、デザイン、コーディング、既存Webサイトのリニューアルなど、多岐にわたるニーズに対応します。さらに、必要であれば3Dモデルを組み込んだ斬新なアプローチも行います。<br />私たちは、お客様のサービスや商品を魅力的かつ効果的にご紹介するため、細部にまでこだわり、最高の成果を出すために全力を尽くします。</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button onClick={() => bottleColorChange("#ffffff")} className="border-2 border-gray-300 bg-white rounded-full w-6 h-6 focus:outline-none" />
                <button onClick={() => bottleColorChange("#22d3ee")} className="border-2 border-gray-300 ml-1 bg-cyan-400 rounded-full w-6 h-6 focus:outline-none" />
                <button onClick={() => bottleColorChange("#fbbf24")} className="border-2 border-gray-300 ml-1 bg-amber-400 rounded-full w-6 h-6 focus:outline-none" />
                <button onClick={() => bottleColorChange("#f0abfc")} className="border-2 border-gray-300 ml-1 bg-fuchsia-300 rounded-full w-6 h-6 focus:outline-none" />
              </div>
            </div>
          </motion.div>
        </div>


      </div>
      {width >= 17 ? <div className="h-full w-full" /> : null}

    </section>
  </Fragment>)
}

function Process() {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Fragment>
      <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl max-auto flex md:flex-row-reverse flex-col relative align-middle">
        <div className="h-full w-full flex flex-col justify-center">
          <div className="bg-white h-auto w-full flex flex-col justify-center rounded-2xl p-5 sm:ml-5">
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
                duration: 1,
              }}>
              <h2 className="text-sm title-font tracking-widest">Flow</h2>
              <div className="flex relative pb-12 mt-2">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 inline-flex items-center justify-center relative z-10">
                  <img src="/textures/step01.svg" />
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
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 inline-flex items-center justify-center text-white relative z-10">
                  <img src="/textures/step02.svg" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">02 要件定義・詳細設計</h2>
                  <p className="text-xs">お客様のご要望をしっかりとお伺いし、その後の「制作」に向けたプロセスについてご案内いたします。また、専門的な用語や概念が出てきた場合でも、私たちはその理解を確認しつつ、詳細を詰めます。</p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 inline-flex items-center justify-center text-white relative z-10">
                  <img src="/textures/step03.svg" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">03 制作</h2>
                  <p className="text-xs">ご提示させていただいた金額と内容にご納得いただけましたら、お申込み契約の手続きを進め、制作をスタートさせます。プロジェクトの規模によりますが、ひと月から半年程度の期間がかかることがあります。</p>
                </div>
              </div>
              <div className="flex relative pb-5">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-pink-100 inline-flex items-center justify-center text-white relative z-10">
                  <img src="/textures/step04.svg" />
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="title-font text-sm mb-1 tracking-wider">04 納品・運用</h2>
                  <p className="text-xs">制作の最終段階においてお客様のご確認をいただきます。すべてのチェックが終了した後、製品を納品させていただきます。</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {width >= 12 ? (
          <div className="w-full h-full flex flex-col align-middle text-center justify-center hover:translate-y-[-5px] transition duration-500">
            <figure className="h-auto ml-auto mx-10 relative z-[1] rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
              <div className="relative flex items-center max-w-[50rem] bg-gray-800 rounded-t-lg py-2 px-24">
                <div className="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  <span className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="w-2 h-2 bg-green-600 rounded-full" />
                </div>
                <div className="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem] dark:bg-gray-600 dark:text-gray-400">www.askone.com</div>
              </div>

              <div className="bg-gray-800 rounded-b-md shadow-xl ">
                <a href="https://next-app-sdgs.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <img className="max-w-full h-auto rounded-b-md" src="/textures/sdgs_home.png" />
                  <span className="absolute text-sm left-0 right-0 text-center mt-5">
                    projects
                  </span>
                </a>
              </div>
            </figure>
          </div>
        ) : null}

      </section>
    </Fragment>
  )
}

const Cost = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (<Fragment>
    {
      width <= 15 ?
        <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">
          <div className="bg-white text-text-brown-original">
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
                duration: 1,
              }}>
              <h2 className="text-sm title-font tracking-widest">Cost</h2>

              <div className="container px-6 py-8 mx-auto">
                <p className="text-xl text-center ">
                  料金の目安
                </p>

                <h1 className="mt-4 text-sm">表示価格は基準料金です。内容・規模により正確な料金をお見積りいたします。</h1>

                <div className="mt-6 space-y-8 xl:mt-12">
                  <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-amber-800 rounded-xl ">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-sm whitespace-nowrap">月額プラン</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h2 className=" text-lg font-semibold">4万円~</h2><span className="text-base font-medium">/月</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between max-w-2xl px-8 py-4 mx-auto border border-amber-800 rounded-xl">
                    <div className="flex flex-col items-center justify-center">
                      <h2 className="text-sm whitespace-nowrap">初期費用</h2><p>+</p><h2 className="text-sm whitespace-nowrap">定額プラン</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h2 className=" text-lg font-semibold">30万~+3万~</h2><span className="text-base font-medium">/月</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </section>
        :
        <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-center">

          <div className="container px-6 py-8 mx-auto bg-white xl:items-center xl:-mx-8 xl:flex rounded-2xl">
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
                duration: 1,
              }}>
              <h2 className="text-sm title-font tracking-widest">Cost</h2>
              <div className="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 className="text-2xl font-medium capitalize lg:text-3xl">料金の目安</h1>

                <div className="mt-4">
                  <span className="inline-block w-40 h-1 border-2 border-amber-800 rounded-full"></span>
                  <span className="inline-block w-3 h-1 mx-1 border-2 border-amber-800 rounded-full"></span>
                  <span className="inline-block w-1 h-1 border-2 border-amber-800 rounded-full"></span>
                </div>

                <p className="mt-4 text-sm">
                  表示価格は基準料金です。内容・規模により正確な料金をお見積りいたします。
                </p>
              </div>

              <div className="flex flex-row xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                  <motion.div className="w-full h-full flex flex-col border rounded-lg md:mx-4"
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
                    <div className="p-6">
                      <h1 className="text-xl font-semibold capitalize lg:text-2xl">月額プラン</h1>

                      <p className="mt-4">
                        月額払いは、制作が完了し、ホームページが公開されるまでは費用が一切発生いたしません。制作完了後に月額料金を支払う流れになります。
                      </p>

                      <h2 className="mt-4 text-xl font-medium sm:text-xl">4万円~ <span className="text-base font-medium">/月</span></h2>

                    </div>

                    <hr className="border-gray-200" />

                    <div className="p-6">
                      <h1 className="text-lg font-medium capitalize lg:text-xl">含まれているモノ:</h1>

                      <div className="mt-8 space-y-4">

                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">運用・保守サービス</span>
                        </div>

                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">定期SEO分析</span>
                        </div>

                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">オリジナル3Dモデル</span>
                        </div>
                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">三年契約更新</span>
                        </div>
                        <div className="flex flex-row-reverse items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">＋ブログ機能</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div className="w-full h-full flex flex-col border rounded-lg md:mx-4"
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
                    }}>
                    <div className="p-6">
                      <h1 className="text-xl font-semibold capitalize lg:text-2xl">初期費用 + 定額プラン</h1>

                      <p className="mt-4">
                        一般的な支払いプランです。ホームページ制作費は、制作着手前に総額の半額を支払い、制作完了後に残りの半額を支払う流れになります。
                      </p>

                      <h2 className="mt-4 text-xl font-medium sm:text-xl">30万~ + 3万円~ <span className="text-base font-medium">/月</span></h2>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="p-6">
                      <h1 className="text-lg font-medium capitalize lg:text-xl">含まれているモノ:</h1>

                      <div className="mt-8 space-y-4">
                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">運用・保守サービス</span>
                        </div>

                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">定期SEO分析</span>
                        </div>

                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">オリジナル3Dモデル</span>
                        </div>
                        <div className="flex items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">二年契約更新</span>
                        </div>

                        <div className="flex flex-row-reverse items-center ">
                          <img src="/textures/check.svg" className="w-4 h-4 p-1 bg-blue-200 rounded-full" viewBox="0 0 20 20" fill="white" />
                          <span className="mx-4">＋ブログ機能</span>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
    }
  </Fragment>

  )
}

const About = () => {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Fragment>
      <section className="h-[100dvh] w-screen px-8 max-w-screen-2xl max-auto relative flex flex-col align-middle justify-around">

        <div className="flex flex-col align-middle items-center justify-center">

          <div className="max-w-2xl shadow shadow-gray-400 sm:rounded-lg bg-white mt-10 border-2 border-amber-800">
            <div className="px-4 py-5 sm:px-6">
              <h3 className=" text-center">
                組織概要
              </h3>
            </div>
            <div className="border-t-2 border-amber-800">
              <dl>
                <div className="px-4 sm:py-5 py-2 sm:grid sm:grid-cols-3 sm:gap-4 gap-1 sm:px-6">
                  <dt className="">
                    組織名
                  </dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    Ask One
                  </dd>
                </div>
                <div className=" px-4 sm:py-5 py-2 sm:grid sm:grid-cols-3 sm:gap-4 gap-1 sm:px-6">
                  <dt className="">
                    代表者
                  </dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    柳田大記
                  </dd>
                </div>
                <div className="px-4 sm:py-5 py-2 sm:grid sm:grid-cols-3 sm:gap-4 gap-1 sm:px-6">
                  <dt className="">
                    メールアドレス
                  </dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    askone40@gmail.com
                  </dd>
                </div>
                <div className=" px-4 sm:py-5 py-2 sm:grid sm:grid-cols-3 sm:gap-4 gap-1 sm:px-6">
                  <dt className="">
                    事業内容
                  </dt>
                  <dd className="mt-1 sm:mt-0 sm:col-span-2">
                    Webサイト制作・運用保守/3Dモデル制作
                  </dd>
                </div>
                <div className="px-4 sm:py-5 py-2 sm:grid sm:grid-cols-3 sm:gap-4 gap-1 sm:px-6">
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
          <div className="flex flex-col items-center border-t-2 border-amber-800 pt-4 sm:pt-6 xs:pt-8">
            <nav className="mb-2 sm:mb-4 xs:mb-2 flex flex-wrap justify-center gap-x-2 gap-y-1 md:justify-start md:gap-4 xs:gap-x-1 xs:gap-y-0">
              <a href="/question" className="h-5 hover:translate-y-[-5px] transition duration-500">よくある質問FAQ</a>
              <a href="/privacy" className="h-5 hover:translate-y-[-5px] transition duration-500">個人情報保護に関する方針</a>
            </nav>
            <div className="body-font">
              <div className="container px-2 py-2 xs:py-3 mx-auto flex items-center justify-center">
                <a className="flex title-font font-medium items-center">
                  <img src="/textures/astronauts.svg" className="w-12 h-12 p-1 rounded-full" />
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
                  <a href="https://twitter.com/Ask_One_For_All" target="_blank" rel="noopener noreferrer">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500" target="_blank" rel="noopener noreferrer">
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
    </Fragment>
  )
}
