import reportImage from "../assets/report_icon.svg";
import trackProgressImage from "../assets/progress_icon.svg";
import weatherImage from "../assets/weather_icon.svg";
import musicImage from "../assets/music_icon.svg";
import conversationImage from "../assets/conversation_icon.svg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const features = [
  {
    name: "Report Local Issues",
    description:
      "Have a concern in your neighborhood? Quickly report community issues like potholes, streetlight outages, vandalism, or request help for local improvements. Make your voice heard with just a few clicks.",
    image: reportImage,
  },
  {
    name: "Track Progress",
    description:
      "Stay in the loop! Track the progress of your community reports in real-time. Whether it's fixing streetlights or addressing other issues, see the changes happening in your neighborhood.",
    image: trackProgressImage,
  },
  {
    name: "Check the Weather",
    description:
      "Be prepared for anything. Get instant access to accurate weather updates so you can plan your day confidently and keep your community safe, no matter the forecast.",
    image: weatherImage,
  },
  {
    name: "Create and Share",
    description:
      "Love music? Share your favorite tracks or playlists, create your own, and explore the community playlist to discover the songs that bring your neighbors together. It’s all about building connections through music.",
    image: musicImage,
  },
  {
    name: "Join the Conversation",
    description:
      "Engage with your community like never before. Join the conversation with your neighbors, share ideas, comments, and help foster a stronger, more connected neighborhood.",
    image: conversationImage,
  },
];

export default function FeaturesSection() {
  return (
    <>
      {/* Navigation */}
      <Nav />

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Enjoy the finest features with our platform
              </h2>
            </div>
            <div className="relative w-full text-center lg:text-left lg:w-2/4">
              <p className="text-lg font-normal text-gray-500 mb-5">
                We provide all the tools and features to help you engage with
                your community efficiently and effectively.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative bg-gray-100 rounded-2xl p-8 transition-all duration-500 hover:bg-purpleLight"
              >
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-16 h-16 mx-auto">
                  <img
                    src={feature.image}
                    alt={feature.name}
                    className="w-12 h-12"
                  />
                </div>
                <h4 className="text-2xl font-semibold text-center text-gray-900 mb-4 capitalize transition-all duration-500 group-hover:text-white">
                  {feature.name}
                </h4>
                <p className="text-center text-gray-500 text-base transition-all duration-500 leading-6 group-hover:text-white">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
