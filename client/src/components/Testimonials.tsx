const Testimonials = () => (
  <section id="testimonials" className="bg-grayLight py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-grayDark mb-8">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "Neighborhood Aid has transformed how we engage with our local
            community. Reporting issues has never been easier."
          </p>
          <div className="mt-4">
            <h5 className="text-gray-900 font-semibold">Martin Johnson</h5>
            <p className="text-gray-600 text-sm">Community Organizer</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "The ability to share neighborhood concerns with local authorities
            has made a real difference."
          </p>
          <div className="mt-4">
            <h5 className="text-gray-900 font-semibold">James Williams</h5>
            <p className="text-gray-600 text-sm">Local Resident</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 italic">
            "From reporting streetlight outages to organizing community events,
            Neighborhood Aid has empowered our neighborhood."
          </p>
          <div className="mt-4">
            <h5 className="text-gray-900 font-semibold">Sarah Lee</h5>
            <p className="text-gray-600 text-sm">Neighborhood Volunteer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
