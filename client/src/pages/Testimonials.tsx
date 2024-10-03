import { Link } from "react-router-dom";
import Nav from "../components/Nav"; // Ensure Nav component path is correct
import Footer from "../components/Footer"; // Ensure Footer component path is correct

const testimonials = [
  {
    name: "Daniel Clifford",
    status: "Verified Member",
    text: "I love how my favorite song got featured on the community playlist! The ability to share music with my neighbors has really brought our community closer. I created a playlist, shared it, and next thing I know, one of my tracks got featured! Neighborhood Aid has made connecting with others so much fun.",
    bgColor: "bg-purpleLighter",
  },
  {
    name: "Jonathan Walters",
    status: "Verified Member",
    text: "Tracking reports in real-time is a game changer! The feature that allows us to create and track community reports is brilliant. It's so easy to submit an issue like a broken streetlight and watch as it gets fixed. I also love seeing what other neighbors are reporting!",
    bgColor: "bg-gray-600",
  },
  {
    name: "Kira Whittle",
    status: "Verified Member",
    text: "Such a life-changing experience. Highly recommended! Neighborhood Aid is a fantastic platform. Whether it’s creating reports, checking the weather, or interacting with the community playlist, it has everything I need. The ability to create and share playlists was a fun surprise!",
    bgColor: "bg-purpleLighter",
  },
  {
    name: "Jeanette Harmon",
    status: "Verified Member",
    text: "A great way to bring the community together! Neighborhood Aid has really helped me feel more connected to my neighbors. I’ve used it to track reports and engage in conversations about neighborhood improvements. It's such a rewarding experience seeing our community grow!",
    bgColor: "bg-warmGray", // Change this to warm gray or a similar light tone.
  },
  {
    name: "Patrick Abrams",
    status: "Verified Member",
    text: "The report tracking feature is fantastic! I can't believe how efficient this platform is. I submitted a pothole report, and it was fixed within days. It's also cool to see other reports from my neighbors. The transparency and efficiency of Neighborhood Aid is unmatched.",
    bgColor: "bg-purpleLight",
  },
  {
    name: "Samuel Green",
    status: "Verified Member",
    text: "I love using Neighborhood Aid to stay on top of my community. Whether it’s creating reports, sharing my favorite playlist, the platform helps me stay connected with my community. I even met a few neighbors through our shared music interests.",
    bgColor: "bg-softOrange",
  },
  {
    name: "Lisa Smith",
    status: "Verified Member",
    text: "Sharing and creating playlists has brought my neighbors closer. Sharing and creating playlists for my neighbors has been a blast. I’ve found new music from others in the community and have enjoyed the collaborative playlist. Music really does bring people together!",
    bgColor: "bg-teal", // Changed to teal or another suitable color.
  },
  {
    name: "Michael Davis",
    status: "Verified Member",
    text: "Neighborhood Aid helped me get involved more in my community. Since using Neighborhood Aid, I've been able to track reports and contribute ideas for improving the neighborhood. It's helped me feel like a bigger part of our community, and I've even made a few new friends along the way.",
    bgColor: "bg-purpleStrong",
  },
];

export default function TestimonialSection() {
  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 text-white transition-transform transform hover:scale-105 ${testimonial.bgColor}`}
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-200">{testimonial.status}</p>
                </div>
                <p className="text-sm">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) section */}
      <div className="flex flex-col items-center justify-center my-12 space-y-6 text-center bg-slate-800 text-white py-16">
        <h3 className="text-3xl font-bold">Ready to Join Neighborhood Aid?</h3>
        <p className="mt-4 text-lg text-gray-400">
          Select a plan that suits your needs and start reporting local issues,
          tracking progress, and engaging with your community.
        </p>
        <div className="mt-8">
          <Link
            to="/signup"
            className="inline-block bg-purpleLight text-white px-8 py-4 rounded-lg text-lg hover:bg-purpleStrong transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
