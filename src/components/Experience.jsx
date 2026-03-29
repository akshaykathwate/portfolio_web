import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const Experience = () => {

    return (
        <section className="py-24 bg-slate-50 dark:bg-dark-bg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            </div>

            <div className="container mx-auto max-w-6xl px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center gap-3 mb-4">
                        <FaCertificate className="text-primary-500 text-4xl" />
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Experience
                        </h2>
                    </div>
                </motion.div>

            </div>
            <div className="container mx-auto max-w-4xl px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-primary-500/40 to-purple-500/40 transform md:-translate-x-1/2"></div>

                    <div className="relative flex flex-col md:flex-row items-start md:items-center mb-12">

                        <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-bg transform md:-translate-x-1/2"></div>

                        <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
                            <div className="bg-white/70 dark:bg-white/5 backdrop-blur-lg border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                    Software Intern (Python)
                                </h3>

                                <p className="text-sm text-primary-500 mt-1">
                                    March 2026 – Present
                                </p>

                                <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                                    KrawlNet Technologies Pvt. Ltd.
                                </p>

                                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                                    <li>✔ Built scalable data extraction pipelines using Python & Scrapy.</li>
                                    <li>✔ Automated workflows, reducing manual effort.</li>
                                    <li>✔ Handled dynamic & static websites efficiently.</li>
                                    <li>✔ Performed data cleaning & validation for quality datasets.</li>
                                </ul>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 text-xs bg-primary-500/10 text-primary-500 rounded-full">Python</span>
                                    <span className="px-3 py-1 text-xs bg-green-500/10 text-green-500 rounded-full">Flask</span>
                                    <span className="px-3 py-1 text-xs bg-green-500/10 text-yellow-500 rounded-full">RestApi's</span>
                                    <span className="px-3 py-1 text-xs bg-purple-500/10 text-purple-500 rounded-full">Scrapy</span>
                                    <span className="px-3 py-1 text-xs bg-green-500/10 text-orange-500 rounded-full">Data Processing</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>

        </section>
    );
};

export default Experience;