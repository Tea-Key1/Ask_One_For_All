import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Contact() {
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
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">お問い合わせフォーム</h2>

                        <p className="mx-auto max-w-screen-md text-start text-gray-500 md:text-lg"></p>
                    </div>

                    <div
                        className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">

                        <div className="sm:col-span-12">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Profile
                            </h2>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-submit-application-full-name"
                                className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Full name
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-submit-application-email"
                                className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Email
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-submit-application-email" type="email"
                                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                        </div>

                        <div className="sm:col-span-3">
                            <div className="inline-block">
                                <label htmlFor="af-submit-application-phone"
                                    className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                    Phone
                                </label>
                            </div>
                        </div>


                        <div className="sm:col-span-9">
                            <input id="af-submit-application-current-company" type="text"
                                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                        </div>
                    </div>

                    <div
                        className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                        <div className="sm:col-span-12">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Subject
                            </h2>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-submit-application-full-name"
                                className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Full name
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <div className="sm:flex">
                                <input type="text"
                                    className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <div className="inline-block">
                                <label htmlFor="af-submit-application-bio"
                                    className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                    Personal summary
                                </label>
                            </div>
                        </div>

                        <div className="sm:col-span-9">
                            <textarea id="af-submit-application-bio"
                                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                                rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
                        </div>
                    </div>


                    <div
                        className="grid sm:grid-cols-12 gap-2 sm:gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                        <div className="sm:col-span-12">
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                Links
                            </h2>
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-submit-application-linkedin-url"
                                className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Current Website URL
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-submit-application-linkedin-url" type="text"
                                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                        </div>

                        <div className="sm:col-span-3">
                            <label htmlFor="af-submit-application-twitter-url"
                                className="inline-block text-sm font-medium text-gray-500 mt-2.5">
                                Other sites URL
                            </label>
                        </div>

                        <div className="sm:col-span-9">
                            <input id="af-submit-application-twitter-url" type="text"
                                className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />
                        </div>

                    </div>

                    <div className="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
                        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Submit application
                        </h2>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                            In order to contact you with future jobs that you may be interested in, we need to store your personal data.
                        </p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            If you are happy for us to do so please click the checkbox below.
                        </p>

                        <div className="mt-5 flex">
                            <input type="checkbox"
                                className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                id="af-submit-application-privacy-check" />
                            <label htmlFor="af-submit-application-privacy-check"
                                className="text-sm text-gray-500 ml-2 dark:text-gray-400">Allow us to process your personal
                                information.</label>
                        </div>
                    </div>

                    <button type="button"
                        className="py-3 px-4 w-full inline-flex justify-center items-center rounded-md border border-transparent font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                        Submit application
                    </button>


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