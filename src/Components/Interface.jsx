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
        <Section><h1>Skills</h1></Section>
        <Section><h1>Products</h1></Section>
        <FooterSection />
      </div>
    </>
  )
}

const AboutSection = () => {
  return (
    <section className="h-screen w-screen px-8 max-w-screen-2xl max-auto flex flex-col relative text-center">
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

const FooterSection = () => {
  const { width,height } = useThree((state)=> state.viewport)
  return (
    <section className="h-screen w-screen p-10 max-auto flex flex-col items-center justify-end align-middle ">


      <div className="pt-4 sm:pt-10 lg:pt-12 xs:pt-16">
        <footer className="mx-auto max-w-screen-2xl px-2 md:px-4 xs:px-6">
          <div className="flex flex-col items-center border-t pt-4 sm:pt-6 xs:pt-8">
            <nav className="mb-2 sm:mb-4 xs:mb-2 flex flex-wrap justify-center gap-x-2 gap-y-1 md:justify-start md:gap-4 xs:gap-x-1 xs:gap-y-0">
              <a href="/question" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">よくある質問FAQ</a>
              <a href="/privacy" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">個人情報保護に関する方針</a>
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
                  <a href="https://twitter.com/Ask_One_For_All" className="text-gray-500">
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
      </div>

    </section>
  )
}
