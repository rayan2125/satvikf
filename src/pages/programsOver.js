const ProgramOverViews = () => {

    return (
        <div>
            <h1 className="text-center text-3xl font-semibold mt-6">Programs and Services at Level Up Learning Centre</h1>

            {/* Curriculum Coverage Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">I. Curriculum Coverage</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>International Baccalaureate (IB)</li>
                    <li>IGCSE (Cambridge Assessment)</li>
                    <li>Advanced Placement (AP) (Coming Soon)</li>
                </ul>
            </div>

            {/* Exclusive Programs for Upper Secondary Students */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">II. Exclusive Programs for Upper Secondary Students (Grades 10-12)</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>Level Up Signature Program</li>
                    <li>Premier Program</li>
                    <li>Essential Program</li>
                </ul>
            </div>

            {/* General Tutoring Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">III. General Tutoring</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>Flexible Tutoring Packages</li>
                    <li>Personalized Tutoring (Grades 6-12)</li>
                </ul>
            </div>

            {/* Competition and Exam Preparations Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold">IV. Competition and Exam Preparations</h2>
                <ul className="list-disc pl-6 mt-2">
                    <li>AP Exam Preparation (Grades 9-12)</li>
                    <li>SAT and ACT Preparation</li>
                    <li>Specific Competitions</li>
                </ul>
            </div>

            {/* Buttons for More Information */}
            
        </div>
    );
};

export default ProgramOverViews;
