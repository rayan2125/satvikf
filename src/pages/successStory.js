import Image from "next/image";

const SucceStories = () => {
  return (
    <div style={{ background: "grey" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* Image Section */}
        <div style={{ marginBottom: "20px", display: "flex", position: "relative", right: 140 }}>
          <Image
            src="/About-1/header-vector.png"
            alt="Personalized Training"
            width={40}
            height={40}
          />
        </div>

        {/* Heading Section */}
        <h1 style={{ textAlign: "center", fontSize: 38, marginTop: "-25px", fontWeight: "lighter", color: "black", marginBottom: 50 }}>
          Success Stories
        </h1>
        <div></div>
        <div style={{ top: 20, flexDirection: "row", display: "flex" }}>
          <div style={{ position: "relative", display: "inline-block", right: 30 }}>
            {/* Background Image */}
            <Image
              src="/Success/background-pattern.png"
              alt="Background Pattern"
              width={1000}
              height={1000}
              style={{ position: "absolute", top: -50, left: 35, zIndex: 1 }}
            />

            {/* Foreground Image */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <Image
                src="/Success/image.png"
                alt="Personalized Training"
                width={300}
                height={400}
              />
            </div>
          </div>
          <div style={{ background: 'white', width: 500, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", padding: "20px", borderRadius: "8px" }}>
            <h1 style={{ color: 'black' }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </h1>
            <h1 style={{ color: "black", fontSize: 24, fontWeight: 'bold' }}>Aadhya Pawar</h1>
            <h1 style={{ color: 'blue', fontWeight: 'bold' }}>Student</h1>
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <h1>Show All Success Stories and Testimonial.</h1>
          <div style={{ background: 'yellow', height: 60, width: 60, borderRadius: 100,justifyItems:'center',alignContent:'center'}}>
            <Image
              src="/Success/show-all-testimonial.png"
              alt="Personalized Training"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SucceStories;
