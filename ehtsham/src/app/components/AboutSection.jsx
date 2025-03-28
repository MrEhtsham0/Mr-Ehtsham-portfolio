"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Award, ChevronRight } from 'lucide-react';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 className="w-5 h-5" />,
    content: [
      "Python & OOP",
      "Machine & Deep Learning (Sklearn, TensorFlow, Pytorch)",
      "NLP & Generative AI",
      "Databases (Sql, NoSql, Graph)",
      "Agentic AI (LangChain & LangGraph)",
      "Quick Demo UIs by Streamlit"
    ]
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-5 h-5" />,
    content: [
      "Becholar in Computer Science from National Textile University Faisalabad",
      "Pre-Engineering from Zakariya College Layyah",
      "Matric from Millat Public High School Chowk Azam Layyah"
    ]
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-5 h-5" />,
    content: [
      "Complete Python Pro Bootcamp",
      "Machine Learning by Zero to Mastery Academy",
      "NLP by vidhya Analytics",
      "LangChain & LangGraph by LangChain Academy",
      "Python Backend Development using FastAPI & Django"
    ]
  }
];

const TabButton = ({ active, selectTab, children, icon }) => {
  return (
    <button
      onClick={selectTab}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg mr-3 
        ${active
          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
          : "bg-transparent text-white hover:bg-gray-800"
        } transition-all duration-300`}
    >
      {icon}
      {children}
    </button>
  );
};

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white relative" id="about">
      <div className="absolute  bg-gradient-to-b from-gray-900/0 via-gray-900 to-gray-900/0 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="md:grid md:grid-cols-2 gap-12 items-center  px-4 sm:py-24 xl:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative">
              <Image
                src="/images/hero-image.png"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl"
                alt="Profile Image"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0 text-left flex flex-col h-full"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              About Me
            </h2>
            <p className="text-sm text-white leading-relaxed mb-8 text-justify">
              "I am an AI Engineer with a passion for creating AI-based web applications. I have experience working with Python, Machine Learning, Deep Learning and Natural Language Processing. I specialize in API development with FastAPI and Django Rest Framework and have expertise in SQL, NoSQL, and Graph Databases. Additionally, I have experience in Agentic and Conversational AI by using LangChain and LangGraph, enabling the development of intelligent and interactive AI systems."  </p>

            <div className="flex flex-row flex-wrap gap-2 mb-8">
              {TAB_DATA.map((item) => (
                <TabButton
                  key={item.id}
                  selectTab={() => handleTabChange(item.id)}
                  active={tab === item.id}
                  icon={item.icon}
                >
                  {item.title}
                </TabButton>
              ))}
            </div>

            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700"
            >
              <ul className="space-y-3">
                {TAB_DATA.find((t) => t.id === tab).content.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-2 text-white"
                  >
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;