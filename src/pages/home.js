import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center" style={{ background: 'black' }}>

                <div className="flex items-center justify-center gap-4">
                    {/* Book */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Image
                            src={"/Hero/element-1.avif"}
                            alt="Book"
                            width={100}
                            height={100}
                        />
                    </motion.div>

                    {/* Text Animation */}
                    <div>
                        <motion.h1
                            className="text-5xl font-bold text-white text-center"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Level Up Your{" "}
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-t from-blue-500 to-green-500"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
                                Academic Journey
                            </motion.span>
                        </motion.h1>
                        <motion.h1
                            className="text-l font-bold text-gray-500 text-center mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            Personalized Tutoring, Engaging Classes, and a Pathway to Success
                        </motion.h1>
                    </div>

                    {/* Rocket */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Image
                            src={"/Hero/element-3.avif"}
                            alt="Rocket"
                            width={100}
                            height={100}
                        />
                    </motion.div>
                </div>

                {/* Buttons Animation */}
                <div className="flex gap-4 mt-8 justify-center">
                    <motion.button
                        className="text-grey font-bold py-2 px-6"
                        style={{
                            background: '#FAA31B',
                            borderRadius: "10px",
                            height: 50
                        }}
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Book a Free Consultation
                    </motion.button>

                    <motion.button
                        className="text-grey font-bold py-2 px-6"
                        style={{
                            background: '#ffff', // Custom green color
                            borderRadius: "10px"
                        }}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Explore Programs
                    </motion.button>
                </div>
                {/* <div style={{}}>

                </div>
                <Image src={"/Hero/common-ellipse.png"}
                    height={1000}
                    width={1000}
                     alt="Rocket"
                     style={{position:'absolute',right:-100}}
                /> */}
                {/* Video and Lab Image */}
                <div className="relative w-full h-auto mb-8 flex items-center justify-center" style={{ top: 30 }}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-4/5 h-auto rounded-lg"
                    >
                        <source src="/Hero/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <motion.div
                        className="absolute left-0 top-1/2 transform -translate-y-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                    >
                        <Image
                            src={"/Hero/element-2.avif"}
                            alt="Lab"
                            width={100}
                            height={100}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
