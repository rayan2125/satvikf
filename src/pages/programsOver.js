import ProgramsOver from "@/components/OverViews/overViews";
import Image from "next/image";

const ProgramOverViews = () => {
    let data = [
        {
            id: 1,
            title: "Curriculum Coverage",
            img: "/Levelup-1/2.png",
            items: [
                "International Baccalaureate (IB)",
                "IGCSE (Cambridge Assessment)",
                "Advanced Placement (AP) (Coming Soon)"
            ]
        },
        {
            id: 2,
            title: "Exclusive Programs for Upper Secondary Students (Grades 10 - 12)",
            img: "/Levelup-1/2.png",
            items: [
                "Level Up Signature Program",
                "Premier Program",
                "Essential Program"
            ]
        },
        {
            id: 3,
            title: "General Tutoring",
            img: "/Levelup-1/2.png",
            items: [
                "Flexible Tutoring Packages",
                "Personalized Tutoring (Grades 6 - 12)"
            ]
        },
        {
            id: 4,
            title: "Competition and Exam Preparations",
            img: "/Levelup-1/2.png",
            items: [
                "AP Exam Preparation (Grades 9 - 12)",
                "SAT and ACT Preparation",
                "Specific Competitions"
            ]
        }
    ];

    return (
        <div className="flex flex-row bg-white">
            <div className="flex-1">
                <div>
                    <div className="relative top-4">
                        <Image
                            src="/About-1/header-vector.png"
                            alt="Personalized Training"
                            width={60}
                            height={60}
                        />
                    </div>
                    <h1 className="text-4xl text-black ml-10 mb-6 w-9/12 tracking-wider">
                        Programs and Services at Level Up Learning Centre
                    </h1>
                </div>
                <p className="text-md w-9/12 font-bold text-slate-600 ml-10 tracking-wider">
                    At Level Up Learning Centre, we offer a comprehensive range of tutoring
                    programs designed to meet the diverse educational needs of our students
                </p>
            </div>

            {/* Second Section */}
            <div className="flex-1 mt-8 px-10 gap-y-2">
                {data.map((program) => (
                    <ProgramsOver
                    id={program.id}
                        key={program.id} 
                        imageUrl={program.img} 
                        title={program.title} 
                        items={program.items} 
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgramOverViews;
