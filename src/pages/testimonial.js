import Image from "next/image";
import "../styles/testimonial.css"

const Testimonial = () => {
    const data = [
        { id: 1, img: '/Testimonial/image-1.png', des: '"This is an amazing product! Highly recommend it to everyone."', name: 'John Doe', role: 'CEO, Company' },
        { id: 2, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 3, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 4, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 5, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 6, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 7, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 8, img: '/Testimonial/image.png', des: '"I had a great experience with the service and support. Will definitely use again."', name: 'Jane Smith', role: 'Marketing Director, Company' },
        { id: 9, img: '/Testimonial/image-1.png', des: '"Fantastic service and amazing quality!"', name: 'Alice Johnson', role: 'Manager, Business' },
        { id: 10, img: '/Testimonial/image-1.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 11, img: '/Testimonial/image-1.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 12, img: '/Testimonial/image.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 13, img: '/Testimonial/image-1.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 14, img: '/Testimonial/image.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },
        { id: 15, img: '/Testimonial/image.png', des: '"Superb customer service and fast delivery!"', name: 'Bob Williams', role: 'CTO, TechCompany' },

    ];

    return (
        <div className="testimonial-container" >
            {data.map((testimonial) => (
                <div key={testimonial.id} className="testimonial" style={{ background: "grey", }}>
                    <Image
                        src={testimonial.img} // Dynamic image path
                        alt={testimonial.name}
                        width={100}
                        height={100}
                        className="testimonial-image"
                    />
                    <h1 className="testimonial-name">{testimonial.name}</h1>
                    <p className="testimonial-text">
                        {testimonial.des}
                    </p>


                </div>
            ))}
        </div>
    );
};

export default Testimonial;
