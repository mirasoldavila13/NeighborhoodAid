const Testimonials = () => (
  <section id="testimonials" className="bg-gray-800 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-300 mb-6">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-gray-400 italic text-sm">
            "Neighborhood Aid has transformed how we engage with our local
            community. Reporting issues has never been easier."
          </p>
          <div className="mt-3">
            <h5 className="text-gray-200 font-semibold">Martin Johnson</h5>
            <p className="text-gray-400 text-xs">Community Organizer</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-gray-400 italic text-sm">
            "The ability to share neighborhood concerns with local authorities
            has made a real difference."
          </p>
          <div className="mt-3">
            <h5 className="text-gray-200 font-semibold">James Williams</h5>
            <p className="text-gray-400 text-xs">Local Resident</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-gray-700 p-4 rounded-lg shadow-md">
          <p className="text-gray-400 italic text-sm">
            "From reporting streetlight outages to organizing community events,
            Neighborhood Aid has empowered our neighborhood."
          </p>
          <div className="mt-3">
            <h5 className="text-gray-200 font-semibold">Sarah Lee</h5>
            <p className="text-gray-400 text-xs">Neighborhood Volunteer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
