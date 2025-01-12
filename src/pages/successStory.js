import Image from "next/image";

import "../styles/success.css"
const SucceStories = () => {
  
  return (
    <div className="bg-slate-200">
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", position: 'relative' }}>
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

          <h1 className="text-4xl font-bold text-black mb-20 text-center ml-8">
            Success Stories
          </h1>

        </div>

        <div className="absolute top-32 flex gap-5 right-72 mb-8">

          <div className="">
            <Image
              src="/Success/left-arrow.png"
              alt="UderLine"
              width={50}
              height={20}
              className="rounded-full"
            />
          </div>
          <div className="">
            <Image
              src="/Success/right-arrow.png"
              alt="UderLine"
              width={50}
              height={20}
              className="rounded-full"
            />
          </div>
          {/* <div style={{background:'red' ,height:20,width:20}}></div> */}
        </div>
        <div style={{ top: 20, flexDirection: "row", display: "flex", marginTop: 15 }}>

          <div style={{ position: "relative", display: "inline-block", right: 30, }}>
            

            <Image
              src="/Success/background-pattern.png"
              alt="Background Pattern"
              width={1000}
              height={1000}
              style={{ position: "absolute", top: -30, left: 35, zIndex: 1 }}
            />

           
            <div style={{ position: "relative", zIndex: 2 }}>
              <Image
                src="/Success/image.png"
                alt="Personalized Training"
                width={300}
                height={400}
              />
            </div>
          </div>

          <div style={{ background: 'white', width: 500, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "30px" }}>
            <h1 className="text-slate-500 font-semibold text-base mb-4 tracking-wider">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h1>
            <h1 style={{ color: "black", fontSize: 24, fontWeight: 'bold' }}>Aadhya Pawar</h1>
            <h1 style={{ color: 'blue', fontWeight: 'bold' }}>Student</h1>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50, marginBottom: 50 }}>

          <svg 
          className="svg-sucess"
            viewBox="0 0 100 100"
            style={{
              bottom: 30,
              position: 'absolute',
              width: '15%',
              height: '15%',
              transform: 'rotate(90deg)', 
            }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="circlePath"
              d="
            M 10, 50
            a 40,40 0 1,1 80,0
            40,40 0 1,1 -80,0
          "
              fill="transparent"
            />
            <text>
              <textPath href="#circlePath">
                Show All Success Stories and Testimonial.
              </textPath>
            </text>
          </svg>
          <div
            style={{
              position: 'relative',
              width: 70, // Circle width
              height: 70, // Circle height
              margin: 'auto',
              backgroundColor: 'orange', // Circle background color
              borderRadius: '50%', // Making it a circle
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden', // Ensures that the circle doesn't overflow
            }}
          >
            {/* Arrow Icon centered inside the circle */}


            <Image
              src="/Success/show-all-testimonial.png"
              alt="UderLine"
              width={30}
              height={20}
              className="rounded-full"
            />



          </div>
        </div>


      </div>
    </div>
  );
};

export default SucceStories;
