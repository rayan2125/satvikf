import Image from "next/image"; // Make sure to import Image

const Footer = () => {
    // console.log("../../public/logo.png")
    return (
        <footer className="bg-gray-800 text-white py-8 mt-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Section 1: Welcome Text and Image */}
                    <div>
                        <div className="mb-4">
                            <Image
                                src="/Footer/logo.png" // Replace with your image path
                                alt="Logo "
                                width={100} // Set appropriate width
                                height={100} // Set appropriate height
                            // Optional: Add styles if needed
                            />
                        </div>
                        <p>
                            Welcome to Level Up Learning Centre, where our commitment to educational excellence helps shape the future leaders of tomorrow.
                        </p>
                    </div>

                    {/* Section 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <div className="mb-4">
                            <Image
                                src="/Footer/underline.png" // Replace with your image path
                                alt="UderLine"
                                width={50} // Set appropriate width
                                height={20} // Set appropriate height
                                className="rounded-full" // Optional: Add styles if needed
                            />
                        </div>
                        <ul>
                            <li><a href="/" className="hover:text-gray-400">Home</a></li>
                            <li><a href="/" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="/" className="hover:text-gray-400">Why Choose Level Up</a></li>
                            <li><a href="/" className="hover:text-gray-400">Testimonial</a></li>
                            <li><a href="/" className="hover:text-gray-400">Programs</a></li>
                            <li><a href="/" className="hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Section 3: Programs */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Programs</h3>
                        <Image
                            src="/Footer/underline.png" // Replace with your image path
                            alt="UderLine"
                            width={50} // Set appropriate width
                            height={20} // Set appropriate height
                            className="rounded-full" // Optional: Add styles if needed
                        />
                        <ul>
                            <li><a href="/" className="hover:text-gray-400">General Tutoring</a></li>
                            <li><a href="/" className="hover:text-gray-400">Competition and Exam Preparations</a></li>
                            <li><a href="/" className="hover:text-gray-400">Exclusive Programs for Upper Secondary Students (Grades 10-12)</a></li>
                            <li><a href="/" className="hover:text-gray-400">Curriculum Coverage</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Contact Information */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <Image
                            src="/Footer/underline.png" // Replace with your image path
                            alt="UderLine"
                            width={50} // Set appropriate width
                            height={20} // Set appropriate height
                            className="rounded-full" // Optional: Add styles if needed
                        />
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/Footer/location.png" // Replace with your image path
                                alt="Location Icon"
                                width={20} // Set appropriate width
                                height={40} // Set appropriate height
                                className="rounded-full" // Optional: Add styles if needed
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/Footer/call.png" // Replace with your image path
                                alt="Mail Icon"
                                width={20} // Set appropriate width
                                height={40} // Set appropriate height
                                className="rounded-full" // Optional: Add styles if needed
                            />
                            <p>+91-12345-12459</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/mail.png" // Replace with your image path
                                alt="Mail Icon"
                                width={20} // Set appropriate width
                                height={40} // Set appropriate height
                                className="rounded-full" // Optional: Add styles if needed
                            />
                            <p style={{ margin: 0 }}>

                                <a href="mailto:info@levelup.com" className="hover:text-gray-400">
                                    info@levelup.com
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            <div
                style={{ background: 'grey', height: .5,marginTop:25 }}
            >

            </div>
            </div>
            <div className="text-center text-sm py-4 ">
                <p>&copy; 2025 Level Up Learning Centre. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
