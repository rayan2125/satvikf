import Blogs from "@/components/news/blog";
import NewsAndUpdate from "@/components/news/newsUpdate";
import Image from "next/image";



const NewsAndUpdates = () => {
  const data = [
    {
      id: 1,

      img: "/Levelup-1/1.png",
      content:
        "At Level Up, we understand that each student has unique learning needs and goals. Our personalized learning approach tailors educational paths specifically for each student based on their strengths, weaknesses, and interests.",
    },
    {
      id: 2,

      img: "/Levelup-1/2.png",
      content:
        "Our tutors conduct detailed analyses of each subject’s curriculum and student performance to identify strengths and areas for improvement. This thorough understanding aids in customizing teaching strategies and learning materials to better suit the student's needs.",
    },
    {
      id: 3,

      img: "/Levelup-1/3.png",
      content:
        "Parents and students receive detailed monthly reports that outline the student’s performance, highlight achievements, and note areas needing attention. These insights drive the forward planning of educational strategies, helping to adjust goals and methods as the student progresses.",
    },
  ]
  return (
    <>
      <div className="bg-white">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Image Section */}
          <div>
            <div className="flex items-center justify-start">
              <div className="relative top-3 ">
                <Image
                  src="/About-1/header-vector.png"
                  alt="Personalized Training"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <h1 className="text-4xl font-bold text-black mb-4 text-center ml-8">
              News and Updates
            </h1>

          </div>



          {
            data.map((item) => (
              <NewsAndUpdate
                key={item.id}
                id={item.id}
                img={item.img}
              />
            ))
          }




          <div>

            <h1 className="text-center text-blue-900  text-3xl font-light mb-40">Explore More Blogs</h1>
          </div>


        </div>
        <div className="relative">
          <Blogs />
        </div>
      </div>
    </>

  );
};

export default NewsAndUpdates;
