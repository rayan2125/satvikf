import { ImageCard } from "@/components/card/imgCard";
import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-row items-center justify-around bg-white">
            {/* Title Section */}
            <div className="ml-10">
                <div className="relative top-4">
                    <Image
                        src="/About-1/header-vector.png"
                        alt="Personalized Training"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="">
                    <h1 className="text-5xl font-bold text-gray-800 ml-5 mb-8">About Us</h1>

                    {/* Description */}
                    <p className="text-black ml-5 w-64">
                        Welcome to Level Up Learning Centre! We are committed to providing high-quality education a
                    </p>

                    {/* Learn More Title */}
                    <h2 className="text-2xl font-semibold text-gray-800 mt-6 ml-5 mb-16">
                        Learn More { }
                    </h2>
                </div>
            </div>

            {/* Image Section */}
            <div
                className="w-full max-w-4xl rounded-lg p-6 flex flex-row items-center justify-around"
                style={{
                    position: "relative",
                }}
            >
                <ImageCard
                    src="/About-1/personalized-training.png"
                    alt="Personalized Training"
                    title="Personalized Learning"
                />
                <ImageCard
                    src="/About-1/innovative-teaching.png"
                    alt="Innovative Teaching"
                    title="Innovative Teaching"
                />
                <ImageCard
                    src="/About-1/supportive-environment.png"
                    alt="Supportive Environment"
                    title="Supportive Environment"
                />
            </div>
        </div>
    );
};

export default About;
