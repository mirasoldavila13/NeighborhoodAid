import Nav from "../components/Nav";
import Footer from "../components/Footer";

type TeamMember = {
    name: string;
    title: string;
    github: string;
    contributions: string[];
  };
  
  const teamMembers: TeamMember[] = [
    {
      name: 'Mirasol Davila',
      title: 'Lead Full Stack Developer (v1.0 & v2.0)',
      github: 'https://github.com/mirasoldavila13',
      contributions: [
        'Mirasol Davila served as the Lead Full Stack Developer for the initial versions of NeighborhoodAid, leading numerous critical development tasks.',
        'Mirasol created a standardized GitHub issue template for user stories and issues, ensuring consistency across 16 different issues that covered frontend, backend, and API integration tasks.',
        'They designed the official logo for the platform, developing several concepts that emphasized community, support, and local engagement.',
        'Mirasol also designed and developed the navigation component for both desktop and mobile views, implementing dynamic state management and accessibility features using Tailwind CSS and semantic HTML.',
        'They created a subscription section to encourage user engagement, focusing on responsive design and accessibility.',
        'Mirasol built an interactive FAQ section using an accordion-style interface, making it easy for users to find the information they needed.',
        'To showcase platform features, they developed an interactive tab system with dynamic feature panels using React and Tailwind CSS.',
        'Mirasol crafted the Pricing component to highlight various subscription plans, ensuring it was user-friendly and visually appealing.',
        'They built the Testimonials component to showcase user feedback, implementing a responsive layout that captured users’ voices.',
        'Mirasol developed an interactive map component using React, TypeScript, and React Leaflet, integrating various APIs to enhance geolocation capabilities.',
        'For reporting local issues, they created the Report page, featuring an integrated map and a streamlined form.',
        'Mirasol enhanced the authentication service to include registration, login, and Spotify API integration, focusing on robust session management.',
        'They implemented important middleware for managing server requests, improving security and error handling.',
        'Mirasol defined and managed associations between Sequelize models to ensure data integrity.',
        'They developed robust API routes for managing authentication, community feeds, and issue reporting, ensuring a smooth user experience.',
        'Mirasol created seed scripts for populating authority reports, aiding in effective testing and development.',
        'They customized the .sequelizerc file for organized paths for migrations and models, making the development process smoother.',
        'Mirasol enhanced the server.js file with middleware integration and organized routes for clarity and performance.',
        'They developed a reusable modal component for displaying dynamic messages, ensuring it was accessible and easy to use.',
        'Mirasol created a component for real-time weather updates, integrating multiple APIs and Axios for a seamless user experience.',
        'For the landing page, they designed the hero section with a responsive layout that captures users’ attention.',
        'Mirasol developed the dashboard navigation component, integrating authentication checks for a secure user experience.',
        'Finally, they created the Dashboard page, providing an interactive community feed and weather updates, facilitating user engagement.',
        'Through combining frontend and backend technologies, Mirasol utilized React, TypeScript, Express.js, and Sequelize to create a cohesive platform.',
      ],
    },
    {
      name: 'Justin Kao',
      title: 'Version 1.0 Developer',
      github: 'https://github.com/PandaKao',
      contributions: [
        'Justin added the PostGIS extension for geometry support for storing longitude and latitude coordinates in server/db/schema.sql.',
        'He created the Issue model in server/models/issue.js, defining fields such as id, description, location, status, and assignedUserId.',
        'Justin created the User model in server/models/user.js, including password hashing functionality before saving the user in the database.',
        'He developed the database seeding logic in server/seeds/index.js to handle database seeding with user and issue data.',
        'Justin created server/seeds/user-seeds.js to seed user data into the database using the User model.',
        'He also created the migration file migrations/20241001203053-create-users.js to set up the issues table schema with necessary fields and constraints.',
        'Justin developed client/src/services/authService.ts to handle JWT-based authentication, including token retrieval, expiration checking, and profile decoding.',
      ],
    },
    {
      name: 'Isaiah Skidmore',
      title: 'Version 1.0 Logo Selector',
      github: 'https://github.com/IsaiahSkidmore',
      contributions: [
        'Isaiah contributed by selecting the official project logo from several options created by Mirasol Davila, helping to define the platform’s visual identity.',
      ],
    },
    {
      name: 'Sammy Kordi',
      title: 'Version 1.0 Contributor',
      github: 'https://github.com/thepeoplesengineer',
      contributions: [
        'Sammy set a strong foundation for community reporting by integrating existing code from the reporting to authorities feature, helping to enhance the project’s capabilities.',
      ],
    },
  ];
  
  
  
  const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
        <p className="text-gray-600 italic mb-2">{member.title}</p>
        <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          GitHub Profile
        </a>
        <ul className="mt-4 list-disc list-inside">
          {member.contributions.map((contribution, index) => (
            <li key={index} className="text-gray-700">
              {contribution}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  const OurTeam: React.FC = () => {
    return (
      <section className="container mx-auto py-12 px-4">
        <Nav/>
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Team</h1>
        <p className="text-center text-gray-700 mb-8">
          At NeighborhoodAid, we value collaboration and the unique contributions of each team member.
          While some members contributed to the foundational elements of the project, others continued to develop and enhance these features, driving our vision forward.
          We are grateful for the initial efforts that set the stage for our success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>
      </section>
      
    );
  };
  
  export default OurTeam;