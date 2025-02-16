"use client";
import { motion } from "framer-motion";
import { Users, Brain, Clock, Code, BookOpen, Eye } from "lucide-react";

const SoftSkillsAndTips = () => {
    const softSkills = [
        {
            icon: <Users className="w-12 h-12 text-blue-400 mb-6" />,
            title: "Team Leadership",
            description: "Experienced in leading development teams and fostering collaborative environments",
        },
        {
            icon: <Brain className="w-12 h-12 text-blue-400 mb-6" />,
            title: "Problem Solving",
            description: "Strong analytical skills with a systematic approach to solving complex challenges",
        },
        {
            icon: <Users className="w-12 h-12 text-blue-400 mb-6" />,
            title: "Communication",
            description: "Excellent verbal and written communication skills with technical and non-technical stakeholders",
        },
        {
            icon: <Clock className="w-12 h-12 text-blue-400 mb-6" />,
            title: "Time Management",
            description: "Efficient in managing multiple projects and meeting deadlines consistently",
        },
    ];

    const devTips = [
        {
            icon: <Code className="w-8 h-8 text-purple-400 flex-shrink-0" />,
            title: "Clean Code Practices",
            content: "Write self-documenting code. If you need comments to explain what your code does, consider rewriting it to be more clear.",
        },
        {
            icon: <Code className="w-8 h-8 text-purple-400 flex-shrink-0" />,
            title: "Version Control",
            content: "Commit early, commit often. Write meaningful commit messages that explain why changes were made, not what was changed.",
        },
        {
            icon: <BookOpen className="w-8 h-8 text-purple-400 flex-shrink-0" />,
            title: "Continuous Learning",
            content: "Spend at least 30 minutes daily learning new technologies or improving existing skills.",
        },
        {
            icon: <Eye className="w-8 h-8 text-purple-400 flex-shrink-0" />,
            title: "Code Review",
            content: "Review others' code regularly. It's one of the best ways to learn and improve your own coding practices.",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="space-y-24">
                    {/* Soft Skills Section */}
                    <div>
                        <div className="text-center mb-16">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
                                variants={itemVariants}
                            >
                                Soft Skills
                            </motion.h2>
                            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto" variants={itemVariants}>
                                Essential interpersonal abilities that complement my technical expertise
                            </motion.p>
                        </div>

                        <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants}>
                            {softSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.03 }}
                                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 shadow-lg group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                                    {skill.icon}
                                    <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                                    <p className="text-gray-400">{skill.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Development Tips Section */}
                    <div>
                        <div className="text-center mb-16">
                            <motion.h2
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6"
                                variants={itemVariants}
                            >
                                Development Tips
                            </motion.h2>
                            <motion.p className="text-gray-400 text-lg max-w-2xl mx-auto" variants={itemVariants}>
                                Insights and best practices I've learned throughout my journey
                            </motion.p>
                        </div>

                        <motion.div className="grid md:grid-cols-2 gap-8" variants={containerVariants}>
                            {devTips.map((tip, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                                    <div className="flex gap-6">
                                        {tip.icon}
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-3">{tip.title}</h3>
                                            <p className="text-gray-400 leading-relaxed">{tip.content}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SoftSkillsAndTips;
