const Section = (props)=>{
    const {children} = props;

    return(
        <>
            <section className=
            "h-screen w-screen p-8 max-w-screen-2xl max-auto flex flex-col items-center justify-center"
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

const AboutSection = ()=>{
    return(
        <Section>

        </Section>
    )
}

const FooterSection = ()=>{
    return(
        <section className="h-screen w-screen max-auto flex flex-col items-start justify-center align-middle">
            <footer className="text-gray-600 body-font ">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="\textures\IMG_3367_w_trans.svg" className="w-20 h-20 p-2 rounded-full"/>
                    <span className="ml-3 text-xl">Ask One</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 ― Ask One —
                        <a href="https://twitter.com/Ask_One_For_All" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Ask_One_For_All</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </section>
    )
}
