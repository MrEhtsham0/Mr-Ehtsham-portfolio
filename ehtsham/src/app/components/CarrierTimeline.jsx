"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Calendar } from "lucide-react";

const CareerTimeline = () => {
    const careers = [
        {
            year: "2024 - Present",
            title: "Generative AI & Agentic AI",
            company: "Prograsec",
            description:
                "I have Explored Generative AI using LangChain,LangGraph and LangSmith.",
            skills: ["LangChain", "LangGraph", "LangSmith", "HuggingFace"],
            icon: Briefcase,
        },
        {
            year: "2023 - 2024",
            title: "Deep Learning Using TensorFLow",
            company: "Youtube/Udemy Courses",
            description:
                "I have Explored Neural Networks using TensorFLow & PyTorch(ANN,CNN,TensorFlow,RNN,LSTM,Transformers",
            skills: ["Keras", "TensorFlow", "Pytorch"],
            icon: Award,
        },
        {
            year: "2023-2024",
            title: "Python,OOP,Numpy,EDA,Machine Learning",
            company: "Soft AI",
            description:
                "I have Explore the Python and Python Libraries.I have Explored Exploratory Data Analysis using  Pandas and Statistics.",
            skills: ["Python", "Pandas", "Statistics"],
            icon: Calendar,
        },
    ];

    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Career Journey
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Exploring my professional evolution through key roles and
                        achievements.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-purple-600 transform -translate-x-1/2"></div>

                    {/* Timeline Items */}
                    {careers.map((career, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex md:items-center min-h-[250px] ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Content Box */}
                            <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
                                    <span className="text-purple-400 font-semibold">
                                        {career.year}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2">{career.title}</h3>
                                    <p className="text-gray-400">{career.company}</p>
                                    <p className="text-gray-300 mt-3">{career.description}</p>

                                    {/* Skills List */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {career.skills.map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Icon */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-1/2">
                                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                    {React.createElement(career.icon, {
                                        size: 20,
                                        className: "text-white",
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CareerTimeline;
