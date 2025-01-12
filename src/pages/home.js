import { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
        <div className="items-center justify-items-center">

            <Navbar />
        </div>
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
                            <div className="mb-4">
                                <Image
                                    src="/Footer/underline.png" 
                                    alt="UderLine"
                                    width={50} 
                                    height={20} 
                                    className="rounded-full" 
                                />
                            </div>
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

                <div className="flex gap-4 mt-8 justify-center">
                    <motion.button
                        onClick={openModal}  // Trigger the modal open
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
                        className="text-slate-400 font-bold py-2 px-6"
                        style={{
                            background: '#ffff', 
                            borderRadius: "10px"
                        }}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        Explore Programs
                    </motion.button>
                </div>

             
                {isModalOpen && (
                    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 flex justify-center items-center" style={{background:'rgba(0,0,0,.8)'}}>
                        <div className="bg-white p-6 rounded-lg w-96">
                            <h2 className="text-xl font-bold">Book a Consultation</h2>
                            <p className="mt-4">Please fill out the details to schedule a free consultation.</p>
                           
                            <form>
                                <div className="mt-4">
                                    <label className="block text-sm">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 mt-2 border rounded"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full p-2 mt-2 border rounded"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm">Your Message</label>
                                    <textarea
                                        className="w-full p-2 mt-2 border rounded"
                                        rows="4"
                                        placeholder="Enter any questions or details"
                                    />
                                </div>

                                <div className="mt-6 flex justify-between">
                                    <button
                                        type="button"
                                        onClick={closeModal}  // Close the modal
                                        className="bg-red-500 text-white py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-green-500 text-white py-2 px-4 rounded"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

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
                            width={150}
                            height={150}
                            style={{right:20}}
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
