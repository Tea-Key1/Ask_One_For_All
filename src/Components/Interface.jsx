import { motion } from "framer-motion";
import ReactTyped from "react-typed";

const Section = (props)=>{
    const {children} = props;

    return(
        <>
            <section className=
            "h-screen w-screen p-8 max-w-screen-2xl max-auto flex flex-col items-start justify-center"
            >{children}</section>
        </>
    )
}

export default function Interface(){
    return(
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

const FooterSection = ()=>{
    return(
        <section className="h-screen w-screen p-10 max-auto flex flex-col items-center justify-end align-middle ">

            <div className="pt-4 sm:pt-10 lg:pt-12">
                <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center border-t pt-6">

                    <nav className="mb-4 flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                        {/* <a href="#" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">ブログ</a> */}
                        <a href="/question" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">よくある質問FAQ</a>
                        <a href="/privacy" className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600">個人情報保護に関する方針</a>
                        
                    </nav>
                    <div className="text-gray-600 body-font ">
                                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                        <img src="\textures\astronauts.svg" className="w-20 h-20 p-2 rounded-full"/>
                                    <span className="ml-3 text-xl">Ask One</span>
                                    </a>
                                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 ― Ask One —
                                        <a className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">askone40@gmai.com</a>
                                    </p>
                                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                        <a href="https://twitter.com/Ask_One_For_All" className="ml-3 text-gray-500">
                                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a className="ml-3 text-gray-500">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-7 h-7" viewBox="0 0 24 24">
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
