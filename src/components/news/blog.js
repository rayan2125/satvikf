import Image from "next/image";

const Blogs = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="bg-blue-600 shadow-lg rounded-lg p-6 relative">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <div className="mb-4">
                            <h1 className="text-5xl text-white mb-10">Ready to Begin</h1>
                            <h1 className="text-5xl text-white">Your Child’s New Journey?</h1>
                        </div>
                        <div className="mb-4">
                            <b className="text-gray-700">
                                Every moment in your child’s early years is crucial. Our programs are designed to inspire curiosity, and build essential skills that will last a lifetime.
                            </b>
                        </div>
                        <div>
                            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Apply Now!
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center relative">
                        <Image
                            src="/7-CTA/image.png"
                            alt="Personalized Training"
                            width={700}
                            height={800}
                            className="rounded-lg absolute " // Adjust this as needed for overlap
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
