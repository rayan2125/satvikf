import Image from "next/image";

const NewsAndUpdate = () => {
  return (
    <div className="container mx-auto mb-10">
      <div className="bg-gray-100 shadow-lg rounded-lg px-10 py-10 flex">
  
    <div className="w-full md:w-1/2 mb-6 md:mb-0">
      <div className="mb-4">
        <h1 className="text-2xl font-bold text-blue-900">Student</h1>
      </div>
      <div className="mb-4">
        <b className="text-gray-700 text-3xl mb-6">
          In the 1500s, when an unknown printer took a galley of type and scrambled...
        </b>
      </div>
      <div>
        <p className="text-lg font-semibold text-gray-900">
          It is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
    </div>
    <div className="w-full md:w-1/2 flex justify-center items-center">
      <Image
        src="/Levelup-1/Exclusive Programs for Upper Secondary Students (Grades 10-12).png"
        alt="Personalized Training"
        width={400}
        height={150}
        className="rounded-lg"
      />
    </div>
  </div>
</div>

    
  );
};

export default NewsAndUpdate;
