import Nav from "../components/Nav";
import Footer from "../components/Footer";

type TeamMember = {
  name: string;
  title: string;
  github: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Mirasol Davila',
    title: 'Lead Full Stack Developer (v1.0 & v2.0)',
    github: 'https://github.com/mirasoldavila13',
  },
  {
    name: 'Justin Kao',
    title: 'Version 1.0 Developer',
    github: 'https://github.com/PandaKao',
  },
  {
    name: 'Isaiah Skidmore',
    title: 'Version 1.0 Logo Selector',
    github: 'https://github.com/IsaiahSkidmore',
  },
  {
    name: 'Sammy Kordi',
    title: 'Version 1.0 Contributor',
    github: 'https://github.com/thepeoplesengineer',
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 hover:bg-purpleLight transition duration-300 group">
      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">{member.name}</h2>
      <p className="text-gray-600 italic mb-2 group-hover:text-white">{member.title}</p>
      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 group-hover:text-white">
        GitHub Profile
      </a>
    </div>
  );
};


const OurTeam: React.FC = () => {
  return (
    <section className="container mx-auto py-12 px-4">
      <Nav />
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Team</h1>
      <p className="text-center text-gray-700 mb-8">
        At NeighborhoodAid, we value collaboration and the unique contributions of each team member.
        We are grateful for the initial efforts that set the stage for our success.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default OurTeam;
