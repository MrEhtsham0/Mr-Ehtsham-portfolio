import Image from 'next/image';

const technologies = [
    { name: 'AWS', src: '/aws.png' },
    { name: 'Django', src: '/django.png' },
    { name: 'GraphQL', src: '/graphql.png' },
    { name: 'Python', src: '/python.png' },
    { name: 'Scitkit-Learn', src: '/sklearn.png' },
    { name: 'PyTorch', src: '/PyTorch.png' },
    { name: 'Firebase', src: '/firebase.png' },
    { name: 'JavaScript', src: '/javascript.png' },
    { name: 'Next.js', src: '/nextjs.png' },
    { name: 'MongoDB', src: '/mongodb.png' },
    { name: 'Node.js', src: '/nodejs.png' },
    { name: 'PostgreSQL', src: '/postgresql.png' },
    { name: 'React', src: '/react.png' },
    { name: 'Tailwind CSS', src: '/tailwind.png' },
    { name: 'TensorFlow', src: '/tensorflow.png' },
    { name: 'MySQL', src: '/mysql.png' },
    { name: 'NestJS', src: '/nestjs.png' },
];

export default function TechnologySection() {
    return (
        <section className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-semibold text-center mb-8">
                    Technologies We Are Working With
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
