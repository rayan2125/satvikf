import Image from "next/image";
import "../../styles/three.css"

export const ImageCard = ({ src, alt, title }) => (
    <div
        className="relative card-container top-10"

    >
        <div className="card">
            <div className="card-top">
                
                <h1
                    style={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "10px",
                        // fontWeight: "bold",
                        fontSize: "18px",
                    }}
                    
                >
                    {title}
                </h1>
            </div>
        </div>
    </div>
);
