import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Question(){
  return(
    <motion.div className="h-screen w-screen flex flex-col items-center justify-start bg-opacity-100"
      initial={{
        opacity:0,
      }}
      animate={{
          opacity:1,
      }}
      transition={{
          duration:1,
      }}
    >
      <div className="mx-auto p-8 max-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">よくある質問FAQ</h2>

          <p className="mx-auto max-w-screen-md text-start text-gray-500 md:text-lg">ここでは、お客様からいただいく質問に対して、簡易ながらお答えいたします。<br />さらに詳しく知りたい方は、気軽にお問い合わせフォームをご利用ください。</p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Web制作を依頼する場合、どういった料金体系になりますか?</h3>
            <p className="text-gray-500">Web制作にかかる料金は、最初に行われる要件定義の段階で確定します。そのため、ご希望の機能やデザインに応じて料金が変動します。<br />例えば、「3Dモデル(1シーン)/問い合わせフォーム/ブログ/運用/保守/宣材写真撮影(最大5点)」などの機能を実装するケースでは、月額3万円でのご提供が可能です。</p>
          </div>

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">使用している言語・開発ツール・ソフトウェアについて教えてください。</h3>
            <p className="text-gray-500">JavaScript・MySQLを使用しています。</p>
          </div>

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">セキュリティについて教えてください。</h3>
            <p className="text-gray-500">セキュリティについては2つの側面から対策を行っています。当組織が実施しているセキュリティでは、お客様の個人情報は法令遵守の保護を実施しており、当組織が利用しているサービスのセキュリティでは、DDoS保護・SOC2 Type2準拠・HTTPS/TLS 1.3を使用しています。</p>
          </div>

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">2年プランとは何ですか?</h3>
            <p className="text-gray-500">2年プランとは、2年間の契約期間を意味します。この契約は、Webサイトの公開期間に関連しており、延長を希望される場合は同額で再契約が可能です。プランは3種類(2年プラン・3年プラン・5年プラン)をご用意しております。この期間契約は、急速に進化するWebサイト関連技術に迅速に対応するために、当社独自のサービス提供方法です。</p>
          </div>

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Webサイト制作の申し込みから公開するまでどれくらいの期間を要しますか?</h3>
            <p className="text-gray-500">Web制作の申し込みから公開するまでに要する期間は、最初に行われる要件定義の段階で確定します。そのため、ご希望の機能やデザインに応じて開発期間が変動します。<br />例えば、「3Dモデル(1シーン)/問い合わせフォーム/ブログ/運用/保守/宣材写真撮影(最大5点)」などの機能を実装するケースでは、2ヶ月を目途にご提供が可能です。</p>
          </div>

          <div className="relative rounded-lg bg-gray-100 p-5 pt-8">
            <span className="absolute -top-4 left-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>

            <h3 className="mb-3 text-lg font-semibold text-indigo-500 md:text-xl">Which payment methods are available?</h3>
            <p className="text-gray-500">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
          </div>

        </div>
        <div className="my-20 flex items-center justify-center">
        <Link to="/">
            <button className="px-5 py-4 text-base font-bold text-center transition duration-500 ease-in-out transform bg-white lg:px-10 rounded-xl hover:bg-blue-400 hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
            ホームに戻る
            </button>
        </Link>
        </div>
      </div>
    </motion.div>
  )
}