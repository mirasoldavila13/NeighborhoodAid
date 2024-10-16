import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Careers: React.FC = () => {
    return (
        <>
            <Nav/>
            <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6">
                
                <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Careers at Neighborhood Aid</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Join Our Team</h2>
                    <p className="text-gray-700">
                        At Neighborhood Aid, we are passionate about building strong communities and empowering residents. We are always on the lookout for talented and motivated individuals who share our vision of making neighborhoods safer and more connected. If you’re ready to make a difference, we want to hear from you!
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Current Openings</h2>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li className="mb-2">
                            <strong>Community Outreach Coordinator</strong>
                            <p className="text-sm">As a Community Outreach Coordinator, you will work closely with residents to promote Neighborhood Aid initiatives, organize events, and build relationships within the community.</p>
                        </li>
                        <li className="mb-2">
                            <strong>Software Developer</strong>
                            <p className="text-sm">We are seeking a Software Developer to help enhance our platform. The ideal candidate will have experience in full-stack development and a passion for community-focused technology.</p>
                        </li>
                        <li className="mb-2">
                            <strong>Data Analyst</strong>
                            <p className="text-sm">The Data Analyst will be responsible for analyzing community data to help drive decision-making and improve our services. Proficiency in data visualization tools is preferred.</p>
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Why Work With Us?</h2>
                    <p className="text-gray-700">
                        Working at Neighborhood Aid means becoming part of a dedicated team that is committed to making a positive impact. We offer:
                    </p>
                    <ul className="list-disc list-inside mb-4 text-gray-700">
                        <li>Opportunities for professional growth and development.</li>
                        <li>A collaborative and supportive work environment.</li>
                        <li>Competitive salaries and benefits.</li>
                        <li>The chance to work on meaningful projects that directly benefit communities.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">How to Apply</h2>
                    <p className="text-gray-700">
                        If you’re interested in joining our team, please send your resume and a cover letter to <a href="mailto:careers@neighborhoodaid.com" className="text-blue-600 hover:underline">careers@neighborhoodaid.com</a>. Be sure to include the position you are applying for in the subject line.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">Stay Connected</h2>
                    <p className="text-gray-700">
                        Follow us on social media and check our website regularly for updates on new job openings and company news. We look forward to hearing from you!
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default Careers;