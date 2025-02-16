"use client";
import Image from "next/image";
const testimonials = [
    {
        name: "Landdrew",
        role: "Fiverr Client",
        country: "USA",
        review:
            "This seller did a very good job with a Desktop GUI Executable Chatbot. He was able to integrate all the functionality that I required. He has incredible attention to detail and professionalism. His proactive communication and quickness to respond made working with him smooth and enjoyable. Highly recommend!",
        flag: "svg/united-states-flag-icon.svg",
    },
    {
        name: "Landdrew",
        role: "Fiverr Client",
        country: "USA",
        review:
            "This seller did a very good job with a Desktop GUI Executable Chatbot. He was able to integrate all the functionality that I required. He has incredible attention to detail and professionalism. His proactive communication and quickness to respond made working with him smooth and enjoyable. Highly recommend!",
        flag: "svg/united-states-flag-icon.svg",
    },
    {
        name: "Landdrew",
        role: "Fiverr Client",
        country: "USA",
        review:
            "This seller did a very good job with a Desktop GUI Executable Chatbot. He was able to integrate all the functionality that I required. He has incredible attention to detail and professionalism. His proactive communication and quickness to respond made working with him smooth and enjoyable. Highly recommend!",
        flag: "svg/united-states-flag-icon.svg",
    },
];

export default function TestimonialSection() {
    return (
        <section className="bg-black text-white py-12 mt-10">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">Testimonial</h2>
                <h2 className="text-3xl font-semibold text-center mb-8">
                    What Our Clients Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-[#222] p-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            <div className="flex items-center gap-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>

                            <p className="mt-4 text-gray-300">{testimonial.review}</p>

                            {/* Added two-line gap before country */}
                            <div className="mt-6 flex items-center gap-2">
                                <p className="text-gray-400 font-medium">{testimonial.country}</p>
                                <Image
                                    src={testimonial.flag}
                                    alt={testimonial.country}
                                    width={24}
                                    height={16}
                                    className="rounded-sm"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
