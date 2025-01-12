import { motion } from "framer-motion";
import Image from "next/image";

const NewsAndUpdate = ({ id, img }) => {
  const isReversed = id === 2; // Check if the id is 2

  return (
    <motion.div className="container mx-auto mb-10 px-20">
      <div
        className={`bg-gray-100 shadow-lg rounded-lg px-6 py-6 flex ${
          isReversed ? "flex-row-reverse" : ""
        }`}
      >
        {/* Text Section */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 px-10">
          <div className="mb-2">
            <h1 className="text-lg font-bold text-blue-900 mb-8">Student</h1>
          </div>
          <div className="mb-8">
            <b className="text-black text-3xl tracking-wider">
              In the 1500s, when an unknown printer took a galley of type and
            </b>
          </div>
          <p
            className="text-md font-bold w-full tracking-wider"
            style={{
              color: "#79747A",
              width: "100%",
            }}
          >
            It is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries. of type and scrambled it to make a type specimen
            book. It has survived not only five centuries.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-10">
          <div className="relative w-full h-full">
            {/* First Image (Behind) */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src="/path/to/first-image.png" // Replace with your first image URL
                alt="First Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>

            {/* Second Image (Comes Through) */}
            <motion.div
              initial={{ x: "100%" }} // Start off-screen
              animate={{ x: 0 }} // Slide in from the right
              transition={{ duration: 1 }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Image
                src={img}
                alt="Personalized Training"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsAndUpdate;
