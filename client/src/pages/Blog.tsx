import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Blog: React.FC = () => {
    const blogPosts = [
        {
            title: "Building Stronger Communities Together",
            date: "October 15, 2024",
            content: `
        In our increasingly disconnected world, it’s essential to foster community ties.
        Stronger communities are built through collaboration, open dialogue, and shared values.
        By participating in local events, volunteering, and supporting one another, we can create a
        more vibrant and resilient neighborhood. Here are a few ways to get involved:
       
        - **Attend Local Events**: Join neighborhood meetings, festivals, and workshops to meet your neighbors and learn about community initiatives.
        - **Volunteer**: Offer your time to local charities, schools, or community organizations. Your skills and passion can make a difference.
        - **Start a Group**: If you see a need in your community, consider starting a group to address it, whether it’s for book lovers, gardeners, or advocates for local issues.
      `,
        },
        {
            title: "Report Community Issues",
            date: "October 15, 2024",
            content: `
        Every community faces challenges, from potholes to streetlight outages. Reporting these issues
        helps local governments prioritize repairs and improvements. Here’s how you can effectively report problems:
       
        - **Be Specific**: When reporting an issue, provide exact locations and descriptions to ensure quick action.
        - **Use Available Tools**: Many cities have dedicated websites or apps for reporting issues. Familiarize yourself with these resources.
        - **Follow Up**: Keep track of your reports and check for updates. Your follow-up can help keep the pressure on local authorities to act.
      `,
        },
        {
            title: "Engaging Youth in Community Service",
            date: "September 28, 2024",
            content: `
        Engaging our youth in community service is vital for their development and the well-being of our neighborhoods.
        It teaches valuable life skills and promotes a sense of responsibility. Here are some ways to get youth involved:
       
        - **Organize Group Projects**: Encourage schools and local organizations to host group projects focused on community improvement.
        - **Mentorship Programs**: Pair young individuals with mentors who can guide them in their community service endeavors.
        - **Recognition**: Celebrate the efforts of youth volunteers with awards or public acknowledgment to motivate continued participation.
      `,
        },
        {
            title: "The Importance of Neighborhood Watch Programs",
            date: "August 12, 2024",
            content: `
        Neighborhood watch programs are an effective way to enhance community safety and foster a sense of belonging.
        They encourage residents to look out for one another and report suspicious activities. Here are key benefits:
       
        - **Improved Communication**: These programs promote open lines of communication between residents and local law enforcement.
        - **Increased Awareness**: Participants become more aware of their surroundings, which can help prevent crime.
        - **Stronger Community Bonds**: Working together to keep the neighborhood safe fosters trust and camaraderie among residents.
      `,
        },
        {
            title: "Creating Inclusive Spaces in Our Communities",
            date: "July 20, 2024",
            content: `
        Inclusive spaces are essential for building a strong community where everyone feels welcome and valued.
        Here are some strategies for creating inclusive environments:
       
        - **Accessibility**: Ensure that public spaces are accessible to individuals of all abilities.
        - **Diverse Programming**: Offer activities and events that cater to diverse interests and backgrounds.
        - **Community Input**: Involve community members in planning and decision-making to ensure that all voices are heard.
      `,
        },
    ];

    return (
        <>
            <Nav/>
            <div className="bg-white max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Neighborhood Blog</h1>

                {blogPosts.map((post, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                        <p className="text-gray-500 mb-2">{post.date}</p>
                        <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
                    </div>
                ))}
            </div>
          <Footer/>      
        </>
    );
};

export default Blog;

