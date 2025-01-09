import Image from "next/image";

 export const ImageCard = ({ src, alt, title }) => (
    <div
        className="relative"
        style={{
            width: 180,
            height: 180,
            borderRadius: 20,
            
            background: "linear-gradient(135deg, #F5D48E, #ECB023)", // Gradient background
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Adds the 3D shadow effect
            position: "relative",
        }}
    >
        <Image
            src={src}
            alt={alt}
            width={170}
            height={170}
            style={{
                position: "absolute",
                top: -50,
                left: 10,
            }}
        />
        <h1
            style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                textAlign: "center",
                marginBottom: "10px",
                fontWeight: "bold",
                fontSize: "18px",
            }}
        >
            {title}
        </h1>
    </div>
);
