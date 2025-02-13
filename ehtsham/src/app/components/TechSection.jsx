"use client";
import Image from 'next/image';
const technologies = [
    { name: 'Numpy', src: '/numpy-1.svg' },
    { name: 'Django', src: '/django.svg' },
    { name: 'GraphQL', src: '/graphql-logo-2.svg' },
    { name: 'Python', src: '/python-4.svg' },
    { name: 'Scitkit-Learn', src: '/scikit-learn.svg' },
    { name: 'PyTorch', src: '/pytorch-icon.svg' },
    { name: 'Firebase', src: '/firebase-1.svg' },
    { name: 'JavaScript', src: '/logo-javascript.svg' },
    { name: 'MongoDB', src: '/mongodb-icon-1.svg' },
    { name: 'Node.js', src: '/Node.js.svg' },
    { name: 'PostgreSQL', src: '/postgresql.svg' },
    { name: 'Tailwind CSS', src: '/tailwind-css-2.svg' },
    { name: 'TensorFlow', src: '/tensorflow-icon.svg' },
    { name: 'MySQL', src: '/mysql-3.svg' },
    { name: 'FastAPI', src: '/FastAPI.svg' },
    { name: 'LangChain', src: '/langchain-icon-seeklogo.svg' },
    { name: 'AWS', src: '/amazon-web-services.svg' },
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
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                            <p className="mt-2 text-sm text-gray-400">{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
