import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import certificate from "../assets/Java_Full_Stack.jpeg";

const Certificates = () => {

    const certificates = [
        {
            title: "Java Full Stack Development",
            issuer: "Symbiosis Skills & Professional University | Capgemini",
            date: "2024",
            image: certificate,
        },

    ];

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
                            Certifications
                        </h2>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Professional certifications demonstrating technical expertise and industry collaboration.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-10">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative w-full md:w-[calc(50%-2.5rem)] lg:w-[calc(50%-2.5rem)] max-w-lg"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 shadow-xl h-full flex flex-col">
                                <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        {cert.title}
                                        {cert.date && <span className="ml-4 text-xs text-slate-500 font-normal">Issued in {cert.date}</span>}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        Issued by {cert.issuer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;