import Image from "next/image"; // Make sure to import Image

const Footer = () => {
    // console.log("../../public/logo.png")
    return (
        <footer className="bg-black text-white py-8 mt-36">
            <div className="container mx-auto px-6 mt-24">
                <div className="flex">

                    <div style={{ width: "40%" }}>
                        <div className="mb-4">
                            <Image
                                src="/Footer/logo.png"
                                alt="Logo"
                                width={80}
                                height={80}

                            />
                        </div>
                        <p className="text-sm w-9/12">
                            Welcome to Level Up Learning Centre, where our commitment to educational excellence helps shape the future leaders of tomorrow.
                        </p>
                    </div>

                    <div className="flex justify-between w-full">

                        <div className="w-1/3">
                            <h3 className="text-xl font-bold mb-1">Quick Links</h3>
                            <div className="mb-4">
                                <Image
                                    src="/Footer/underline.png"
                                    alt="UderLine"
                                    width={50}
                                    height={20}
                                    className="rounded-full"
                                />
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">Home</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">About Us</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">Why Choose Level Up</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">Testimonial</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">Programs</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-light tracking-wider">FAQ</a></li>
                            </ul>
                        </div>


                        <div className="w-1/3">
                            <h3 className="text-xl font-bold mb-1 ">Programs</h3>

                            <div className="mb-4">
                                <Image
                                    src="/Footer/underline.png"
                                    alt="UderLine"
                                    width={50}
                                    height={20}
                                    className="rounded-full"
                                />
                            </div>
                            <ul className="flex flex-col gap-2">
                                <li><a href="/" className="hover:text-gray-400 text-xs font-ligth tracking-wider ">General Tutoring</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-ligth tracking-wider">Competition and Exam Preparations</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-ligth tracking-wider">Exclusive Programs for Upper Secondary Students (Grades 10-12)</a></li>
                                <li><a href="/" className="hover:text-gray-400 text-xs font-ligth tracking-wider">Curriculum Coverage</a></li>
                            </ul>
                        </div>


                        <div className="w-1/3 ">
                            <h3 className="text-xl font-bold mb-1">Contact Us</h3>
                            <div className="mb-4">
                                <Image
                                    src="/Footer/underline.png"
                                    alt="UderLine"
                                    width={50}
                                    height={20}
                                    className="rounded-full"
                                />
                            </div>
                        
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/Footer/location.png"
                                alt="Location Icon"
                                width={20}
                                height={40}
                                className="rounded-full"
                            />
                            <p className="hover:text-gray-400 text-sd font-ligth wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/Footer/call.png"
                                alt="Mail Icon"
                                width={20}
                                height={40}
                                className="rounded-full"
                            />
                            <p className="hover:text-gray-400 text-sd font-ligth wider">+91-12345-12459</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <Image
                                src="/mail.png"
                                alt="Mail Icon"
                                width={20}
                                height={40}
                                className="rounded-full"
                            />
                            <p style={{ margin: 0 }}>

                                <a href="mailto:info@levelup.com" className="hover:text-gray-400">
                                    info@levelup.com
                                </a>
                            </p>
                        </div>
</div>
                    </div>
                </div>
                <div
                    style={{ background: 'grey', height: .5, marginTop: 25 }}
                >

                </div>
            </div>
            <div className="text-center text-sm mt-4">
                <p>&copy; 2025 Level Up Learning Centre. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
