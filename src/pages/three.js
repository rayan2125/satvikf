
import Image from "next/image";
import "../styles/three.css"

const ThreeDCard = () => {
    return (
        <div className="card-container ">
            <div className="card">
                <div className="card-top">
                <Image
             src="/About-1/innovative-teaching.png"
            alt={"jjj"}
            width={170}
            height={170}
            style={{
                position: "absolute",
                top: -50,
                left: 10,
            }}
        />
        <h1>httt</h1>
                </div>

            </div>
        </div>
    );
};

export default ThreeDCard;
