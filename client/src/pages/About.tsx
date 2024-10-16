import Nav from "../components/Nav";
import Footer from "../components/Footer";

const About: React.FC = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto p-6">
                <Nav />
                <h1 className="text-4xl font-bold mb-4 text-center">About Neighborhood Aid</h1>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
                    <p>
                        At Neighborhood Aid, we believe in the power of community and the importance of supporting one another. Our mission is to provide a platform where residents can report local issues, share resources, and engage with their neighbors to foster a safer and more connected environment. By leveraging technology, we aim to empower communities to take proactive steps toward improving their neighborhoods.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                    <p>
                        Neighborhood Aid is a community-driven platform that allows users to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Report Local Issues:</strong> Whether it's a pothole, a broken streetlight, or a public safety concern, residents can easily report issues in their neighborhoods. Our intuitive reporting system ensures that your concerns reach the appropriate authorities swiftly and efficiently.</li>
                        <li><strong>Connect with Neighbors:</strong> Building a sense of community is essential. Our platform enables users to connect with their neighbors, share experiences, and offer assistance where needed. From organizing community clean-up events to sharing local resources, Neighborhood Aid fosters meaningful connections.</li>
                        <li><strong>Access Important Resources:</strong> We provide a centralized hub for accessing essential community resources, including local services, support groups, and volunteer opportunities. Our goal is to ensure that residents have the information they need to thrive in their neighborhoods.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Interactive Reporting:</strong> Easily report local issues with our user-friendly interface, which includes map integration for precise location tracking.</li>
                        <li><strong>Community Feed:</strong> Stay informed about what's happening in your neighborhood with real-time updates and discussions.</li>
                        <li><strong>Authentication & Security:</strong> Our platform uses robust JWT-based authentication to ensure the security and privacy of user data.</li>
                        <li><strong>Resource Directory:</strong> Access a comprehensive directory of local services and support resources to help you and your neighbors.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
                    <p>
                        We invite you to become a part of the Neighborhood Aid community. Together, we can work towards creating safer, more connected neighborhoods. Whether you want to report an issue, lend a helping hand, or simply connect with your neighbors, Neighborhood Aid is here for you.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
                    <p>
                        To stay updated with our latest developments and community initiatives, follow us on social media or subscribe to our newsletter. Your involvement is crucial to our success, and we appreciate your commitment to making our neighborhoods better places to live.
                    </p>
                </section>
            </div>
          <Footer/>
        </>

    );
};

export default About;