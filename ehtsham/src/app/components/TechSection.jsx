"use client";
import Image from 'next/image';

const technologies = [
    { name: 'Numpy', src: 'svg/numpy-1.svg' },
    { name: 'Django', src: 'svg/django.svg' },
    { name: 'Python', src: 'svg/python-4.svg' },
    { name: 'Scitkit-Learn', src: 'svg/scikit-learn.svg' },
    { name: 'PyTorch', src: 'svg/pytorch-icon.svg' },
    { name: 'Firebase', src: 'svg/firebase-1.svg' },
    { name: 'JavaScript', src: 'svg/logo-javascript.svg' },
    { name: 'MongoDB', src: 'svg/mongodb-icon-1.svg' },
    // { name: 'Node.js', src: 'svg/Node.js.svg' },
    { name: 'PostgreSQL', src: 'svg/postgresql.svg' },
    { name: 'Tailwind CSS', src: 'svg/tailwind-css-2.svg' },
    { name: 'TensorFlow', src: 'svg/tensorflow-icon.svg' },
    { name: 'MySQL', src: 'svg/mysql-3.svg' },
    { name: 'FastAPI', src: 'svg/FastAPI.svg' },
    { name: 'LangChain', src: 'svg/langchain-icon-seeklogo.svg' },
    // { name: 'AWS', src: 'svg/amazon-web-services.svg' },
];

export default function TechnologySection() {
    return (
        <section className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Technologies I'm Working With
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center items-center">
                    {technologies.map((tech, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Image
                                src={tech.src}
                                alt={tech.name}
                                width={60}
                                height={60}
                            />
                            <p className="mt-2 text-sm text-gray-400">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
