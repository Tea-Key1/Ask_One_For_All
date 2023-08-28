import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Question() {
  return (
    <>

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
      <div className="mx-auto p-8 max-auto max-w-screen-2xl px-10 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">よくある質問FAQ</h2>

          <p className="mx-auto max-w-screen-md text-start text-gray-500 md:text-lg">ここでは、お客様からいただいく質問に対して、簡易ながらお答えいたします。<br />さらに詳しく知りたい方は、気軽にお問い合わせください。</p>
        </div>


        <div className="grid gap-8 sm:grid-cols-2 sm:gap-y-10 xl:grid-cols-3">

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 text-base font-semibold">Web制作を依頼する場合、どういった料金体系になりますか?</h3>
            <p className="text-sm">Web制作にかかる料金は、最初に行われる要件定義の段階で確定します。そのため、ご希望の機能やデザインに応じて料金が変動します。<br />例えば、「3Dモデル(1シーン)/9ページ/保守/宣材写真撮影(最大5点)」などの機能を実装するケースでは、月額3万円でのご提供が可能です。</p>
          </div>

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 text-base font-semibold">使用している言語・開発ツール・ソフトウェアについて教えてください。</h3>
            <p className="text-sm">JavaScript・SQLを使用しています。プラットフォームはVercel・GitHubを使用しています。ソフトウェアについては、Illustrator・Blender等を使用しています。</p>
          </div>

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 font-semibold">セキュリティについて教えてください。</h3>
            <p className="text-sm">セキュリティリスクに対して、2つの側面から対策を行っています。当組織が実施しているセキュリティでは、お客様の個人情報は法令遵守の保護を実施しており、当組織が利用しているサービスのセキュリティでは、DDoS保護・SOC2 Type2準拠・HTTPS/TLS 1.3を使用しています。</p>
          </div>

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 font-semibold">イラストなど3Dモデル以外の制作依頼は受け付けていますか?</h3>
            <p className="text-sm">3Dモデル</p>
          </div>

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 font-semibold">Webサイト制作の申し込みから公開するまでどれくらいの期間を要しますか?</h3>
            <p className="text-sm">Web制作の申し込みから公開するまでに要する期間は、最初に行われる要件定義の段階で確定します。そのため、ご希望の機能やデザインに応じて開発期間が変動します。<br />例えば、「3Dモデル(1シーン)/問い合わせフォーム/ブログ/運用/保守/宣材写真撮影(最大5点)」などの機能を実装するケースでは、2ヶ月を目途にご提供が可能です。</p>
          </div>

          <div className="relative rounded-lg p-5 pt-8 bg-bg-pink-thin" style={{ borderRadius: "1rem" }}>
            <span className="absolute -top-4 left-4 items-center justify-center rounded-full">
              <img src="/textures/question.svg" className="w-8 h-8" />
            </span>
            <h3 className="mb-3 font-semibold">支払方法は何がありますか？</h3>
            <p className="text-sm">支払方法にはいくつかの選択肢がありますが、私たちの提案といたしましては、毎月定期的にお支払いをいただく形をご提供しております。具体的には、私たちの指定の銀行口座に毎月一定額をお振り込みする形となります。この支払方法により、お客様の負担を最小限に抑えつつ、安定した予算管理が可能となります。お支払いスケジュールや金額は、事前にお客様のご要望に合わせて調整させていただきます。</p>
          </div>


        </div>
        <div className="my-10 flex items-center justify-center">
          <Link to="/">
            <button className="px-5 py-4 text-base font-bold text-center lg:px-10 rounded-xl border-t-2 border-gray-700 shadow hover:bg-bg-pink-thin hover:text-gray-500 transition duration-500">
              ホームに戻る
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
    </>
  )
}