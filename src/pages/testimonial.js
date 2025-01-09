import React from "react";
// Adjust the path based on your file structure
import "../styles/testimonial.css";
import TestimonialScroller from "@/components/testinomial/testinomail";
import Image from "next/image";

function Testimonial() {
    const data = [
        { id: 1, img: '/Testimonial/image-1.png', des: '"This is an amazing product! Highly recommend it to everyone."', name: 'John Doe', role: 'CEO, Company' },
        { id: 2, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 3, img: '/Testimonial/image.png', des: '"Fantastic service and amazing quality!"', name: 'Alice Johnson', role: 'Manager, Business' },
        { id: 4, img: '/Testimonial/image-1.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 5, img: '/Testimonial/image-1.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
    ];

    return (
        <section>
            
            {/* {data.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-desc">{testimonial.des}</p>
                        
                    </div>
                ))} */}
            <TestimonialScroller baseVelocity={-20}>
                {data.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id} style={{background:'grey',padding:10,margin:10,height:100}}>
                        <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-desc">{testimonial.des}</p>
                        
                    </div>
                ))}
            </TestimonialScroller>
            {/* <TestimonialScroller baseVelocity={-20}>
                {data.map((testimonial) => (
                    <div className="testimonial-card" key={testimonial.id}>
                        <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                        <p className="testimonial-desc">{testimonial.des}</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                        <p className="testimonial-role">{testimonial.role}</p>
                    </div>
                ))}
            </TestimonialScroller> */}
        </section>
    );
}

export default Testimonial;
