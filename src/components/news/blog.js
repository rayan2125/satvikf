import Image from "next/image";

const Blogs = () => {
    return (
        <div className="container absolute  -top-20 mx-auto mb-16 px-20 ml-10">
            <div className=" shadow-lg rounded-lg relative " style={{borderRadius:30 ,background:'#070675'}}>
                <div className="flex relative "> {/* Make the parent flex container relative */}
                    <div className=" px-16">
                        <div className="mb-4">
                            <h1 className="text-4xl text-white mb-4 mt-4 tracking-wider">Ready to Begin</h1>
                            <h1 className="text-2xl text-white font-bold tracking-wider">Your Child’s New Journey?</h1>
                        </div>
                        <div className="mb-4 ">
                            <b className="text-slate-900 text-bold tracking-wider">
                                Every moment in your child’s early years is crucial. Our programs are designed to inspire curiosity, and build essential skills that will last a lifetime.
                            </b>
                        </div>
                        <div className="mb-8">
                            <button className="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                                Apply Now!
                            </button>
                        </div>
                    </div>

                    {/* This div will now overlap the other div */}

                    <Image
                        src="/7-CTA/image.png"
                        alt="Personalized Training"
                        width={500} // Increased image width
                        height={300} // Increased image height
                        className="rounded-lg -mt-24 object-cover w-full md:w-1/2 top-0 left-0 z-10 " 
                        objectFit="cover"
                        // Negative margin to move the image upwards
                    />

                </div>
            </div>
        </div>


    );
};

export default Blogs;
