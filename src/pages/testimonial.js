import React from "react";
// Adjust the path based on your file structure
import "../styles/testimonial.css";

import Image from "next/image";
import TestimonialScroller from "@/components/testinomial/testinomail";

function Testimonial() {
    const data = [
        { id: 1, img: '/Testimonial/image-1.png', des: '"This is an amazing product!s simply dummy Lorem Ipsum has recommend it to everyone."', name: 'John Doe', role: 'CEO, Company' },
        { id: 2, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 3, img: '/Testimonial/image.png', des: '"Fantastic service and amazing quality!"', name: 'Alice Johnson', role: 'Manager, Business' },
        { id: 4, img: '/Testimonial/image-1.png', des: 'Superb customer service and fast delivery! text of the printing and typesetting industry.', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 5, img: '/Testimonial/image-1.png', des: 's simply dummy Lorem Ipsum has been the industry stthe 1500s, when an unknown printer took', name: 'Jane Smith', role: 'Marketing Director, Company' },
    ];

    return (
        <section className="flex flex-wrap">
        <TestimonialScroller baseVelocity={20}>
            {data.map((testimonial) => (
                <div
                    className="bg-slate-600 rounded-2xl px-8 py-8 m-4 w-full md:w-1/3"
                    key={testimonial.id}
                    style={{ overflow: "hidden", maxWidth: "300px" }} // Optional inline styles
                >
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonial-img"
                    />
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-desc">{testimonial.des}</p>
                </div>
            ))}
        </TestimonialScroller>
        <TestimonialScroller baseVelocity={20}>
            {data.map((testimonial) => (
                <div
                    className="bg-slate-600 rounded-2xl px-8 py-8 m-4 w-full md:w-1/3"
                    key={testimonial.id}
                    style={{ overflow: "hidden", maxWidth: "300px" }} // Optional inline styles
                >
                    <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="testimonial-img"
                    />
                    <p className="testimonial-name">{testimonial.name}</p>
                    <p className="testimonial-desc">{testimonial.des}</p>
                </div>
            ))}
        </TestimonialScroller>
    </section>
    
    
    );
}

export default Testimonial;



