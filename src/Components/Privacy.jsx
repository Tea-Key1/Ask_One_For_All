import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Privacy() {
    return (
        <motion.div className="h-screen w-screen flex flex-col items-center justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="mx-auto p-8 max-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-10 md:mb-16">
                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">個人情報保護に関する方針</h2>
                </div>

                <div className="my-20 mx-20">

                    <p className="text-gray-500">
                        Ask One(以下、「当組織」という。)は，ユーザーの個人情報について以下のとおりプライバシーポリシー（以下、「本ポリシー」という。）を定めます。本ポリシーは、当社がどのような個人情報を取得し、どのように利用・共有するか、ユーザーがどのようにご自身の個人情報を管理できるかをご説明するものです。
                    </p>
                    <p className="text-gray-500">

                        <strong>【1.事業者情報】</strong><br />
                        組織名:Ask One<br />
                        代表者:柳田 大記<br />
                        <strong>【2.個人情報の取得方法】</strong><br />
                        当組織はユーザーが利用登録をするとき、氏名・生年月日・住所・電話番号・メールアドレスなど個人を特定できる情報を取得させていただきます。<br />
                        お問い合わせフォームやコメントの送信時には、氏名・電話番号・メールアドレスを取得させていただきます。<br />
                        <strong>【3.個人情報の利用目的】</strong><br />
                        取得した閲覧・購買履歴等の情報を分析し、ユーザー別に適した商品・サービスをお知らせするために利用します。また、取得した閲覧・購買履歴等の情報は、結果をスコア化した上で当該スコアを第三者へ提供します。<br />
                        <strong>【4.個人データを安全に管理するための措置】</strong><br />
                        当組織は個人情報を正確かつ最新の内容に保つよう努め、不正なアクセス・改ざん・漏えい・滅失及び毀損から保護するため全従業員及び役員に対して教育研修を実施しています。また、個人情報保護規程を設け、現場での管理についても定期的に点検を行っています。<br /><br />
                        <strong>【5.個人データの共同利用】</strong><br />
                        当組織は、以下のとおり共同利用を行います。<br /><br />
                        個人データの管理に関する責任者<br />
                        柳田 大記<br /><br />
                        共同して利用する者の利用目的<br />
                        上記「利用目的」の内容と同様。<br /><br />
                        利用項目<br />
                        氏名、住所、電話番号、メールアドレス<br /><br />
                        <strong>【6.個人データの第三者提供について】</strong><br />
                        当組織は法令及びガイドラインに別段の定めがある場合を除き、同意を得ないで第三者に個人情報を提供することは致しません。<br /><br />
                        <strong>【7.保有個人データの開示、訂正】</strong><br />
                        当組織は本人から個人情報の開示を求められたときには、遅滞なく本人に対しこれを開示します。個人情報の利用目的の通知や訂正、追加、削除、利用の停止、第三者への提供の停止を希望される方は以下の手順でご請求ください。<br />
                        （各社請求方法を指定）<br /><br />
                        送付先住所<br />
                        G-mailアドレス:askone40@gmai.com<br />
                        <strong>【8.個人情報取り扱いに関する相談や苦情の連絡先】</strong><br />
                        当組織の個人情報の取り扱いに関するご質問やご不明点、苦情、その他のお問い合わせはお問い合わせフォームよりご連絡ください。<br /><br />
                        <strong>【9.SS(HTTPS/TLS 1.3)について】</strong><br />
                        当組織のWebサイトはHTTPS/TLS 1.3に対応しており、WebブラウザとWebサーバーとの通信を暗号化しています。したがって、ユーザーが入力する氏名や住所、電話番号などの個人情報は自動的に暗号化されます。<br /><br />
                        <strong>【10.プライバシーポリシーの制定日及び改定日】</strong><br />
                        制定:2023年8月10日<br />
                        <strong>【11.免責事項】</strong><br />
                        当組織Webサイトに掲載されている情報の正確性には万全を期していますが、利用者が当社Webサイトの情報を用いて行う一切の行為に関して、一切の責任を負わないものとします。<br />
                        当組織は、利用者が当社Webサイトを利用したことにより生じた利用者の損害及び利用者が第三者に与えた損害に関して、一切の責任を負わないものとします。<br />
                        <strong>【12.著作権・肖像権】</strong><br />
                        当組織Webサイト内の文章や画像、すべてのコンテンツは著作権・肖像権等により保護されています。無断での使用や転用は禁止されています。<br />
                        <strong>【13.リンク】</strong><br />
                        当組織Webサイトへのリンクは、自由に設置していただいて構いません。ただし、Webサイトの内容等によってはリンクの設置をお断りすることがあります。<br />
                    </p>
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