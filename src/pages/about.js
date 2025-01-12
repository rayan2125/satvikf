import { ImageCard } from "@/components/card/imgCard";
import Image from "next/image";
import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
    return (
        <div className="flex w-full flex-row items-center justify-around bg-white ">

            <div className="ml-10 w-1/2 md-w-full ml-10">

                <div className="relative top-4">
                    <Image
                        src="/About-1/header-vector.png"
                        alt="Personalized Training"
                        width={60}
                        height={60}
                    />
                </div>
                <div className="">
                    <h1 className="text-6xl font-bold text-gray-800 ml-5 mb-8">About Us</h1>
                    <p className="text-black ml-5  tracking-widest">
                        At our institution, Level Up Education Hub, we enthusiastically invite you. Our commitment to high-quality learning shapes the next generation of leaders.
                    </p>
                    <div className="flex flex-row items-center ml-5">
                        <h2 className="text-xl font-semibold text-black">
                            Learn More
                        </h2>
                        <MdKeyboardArrowRight size={30} className="ml-2"  color="black"/>
                    </div>

                </div>
            </div>


            <div
                className="rounded-lg  flex flex-row   top-20 left-10"
                style={{
                    position: "relative",
                    perspective: "1000px",
                }}
            >
                <div className="image-card-3d">
                    <ImageCard
                        // src="/About-1/personalized-training.png"
                        alt="Personalized Training"
                        title="Personalized Learning"
                    />
                    <Image
                        src="/About-1/personalized-training.png"
                        alt="Personalized Training"
                        width={180}
                        height={180}
                        style={{
                            position: "absolute",
                            top: 0,

                        }}
                    // className="h-[190] w-132 object-cover"
                    />

                </div>
                <div className=" relative image-card-3d">
                    <ImageCard
                        // src="/About-1/innovative-teaching.png"
                        alt="Innovative Teaching"
                        title="Innovative Teaching"
                    />
                    <Image
                        src="/About-1/innovative-teaching.png"
                        alt={"kkkk"}
                        width={180}
                        height={180}
                        style={{
                            position: "absolute",
                            top: -20,

                        }}
                    // className="h-[190] w-132 object-cover"
                    />
                </div>
                <div className="image-card-3d">
                    <ImageCard
                        // src="/About-1/supportive-environment.png"
                        alt="Supportive Environment"
                        title="Supportive Environment"
                    />
                    <Image
                        src="/About-1/supportive-environment.png"
                        alt="Supportive Environment"
                        width={180}
                        height={180}
                        style={{
                            position: "absolute",
                            top: 0,

                        }}

                    />
                </div>
            </div>
        </div>
    );
};

export default About;
