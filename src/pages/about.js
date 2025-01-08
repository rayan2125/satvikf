import Image from "next/image";

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-8">
            {/* Title */}
            <Image
                        src="/About-1/header-vector.png"
                        alt="Personalized Training"
                        width={60}
                        height={60}
                    />
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

            {/* Description */}
            <p className="text-lg text-gray-700 text-center max-w-3xl mb-8">
                Welcome to Level Up Learning Centre! We are committed to providing high-quality education and personalized tutoring to help students achieve their academic goals. Our team of experienced tutors is dedicated to fostering a positive and engaging learning environment. Whether you're preparing for exams or seeking to improve your academic skills, we have tailored programs to support your journey. Join us today and take the first step towards academic success!
            </p>

            {/* Learn More Title */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learn More</h2>

            {/* Gradient Background with Images in Row */}
            <div
                className="w-full max-w-4xl rounded-lg shadow-md p-6 flex flex-row items-center justify-around"
                style={{
                    // background: "linear-gradient(to right, #F5D48E, #f7797d)",
                }}
            >
                {/* Image 1 */}
                <div
                    className="bg-yellow-500 p-4 rounded-lg shadow-md flex items-center justify-center"
                    style={{ width: 100, height: 100, background: "linear-gradient(to top, #F5D48E, #ECB023)", }}
                >
                    <Image
                        src="/About-1/personalized-training.png"
                        alt="Personalized Training"
                        width={60}
                        height={60}
                    />
                </div>

                {/* Image 2 */}
                <div
                    className="bg-yellow-500 p-4 rounded-lg shadow-md flex items-center justify-center"
                    style={{ width: 100, height: 100, background: "linear-gradient(to top, #F5D48E, #ECB023)", }}
                >
                    <Image
                        src="/About-1/innovative-teaching.png"
                        alt="Innovative Teaching"
                        width={60}
                        height={60}
                    />
                </div>

                {/* Image 3 */}
                <div
                    className="bg-yellow-500 p-4 rounded-lg shadow-md flex items-center justify-center"
                    style={{ width: 100, height: 100, background: "linear-gradient(to top, #F5D48E, #ECB023)", }}
                >
                    <Image
                        src="/About-1/supportive-environment.png"
                        alt="Supportive Environment"
                        width={60}
                        height={60}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
