const ProgramsOver = ({ imageUrl, title, items }) => {
    return (
        <>
        <div
            style={{ borderRadius: 40, backgroundImage: `url(${imageUrl})` }}
            className={`bg-contain bg-center text-white h-[400px] flex flex-col justify-end mb-6 relative`}
        >
            {/* Positioning the colorful div on the right */}
            <div className="w-12 h-12 bg-blue-900  absolute rounded-lg  right-10 bottom-1/4">
            </div>
            
            <div className="bg-[rgba(255,255,255,0.9)] px-6 py-2 rounded-b-lg">
                <h2 className="text-xl font-bold text-black ml-5 w-9/12">{title}</h2>
                <ul className="flex flex-wrap mt-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="bg-gradient-to-r from-blue-900 to-blue-500 mb-2 px-2 py-1 ml-5 text-sm rounded-full font-bold"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};

export default ProgramsOver;
