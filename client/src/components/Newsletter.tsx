const Newsletter = () => (
  <section id="early-access" className="relative px-6 md:px-0">
    <div className="relative max-w-4xl mx-auto p-10 space-y-6 text-center rounded-lg bg-gray-200 shadow-lg md:px-16">
      <h5 className="text-2xl font-bold">Get early access today</h5>
      <p className="text-sm">
        It only takes a minute to sign up and our free starter tier is extremely
        generous.
      </p>
      <div className="flex flex-col items-start space-y-6 md:flex-row md:space-x-6">
        <div className="w-full md:flex-1">
          <input
            type="text"
            className="w-full px-10 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-purpleLight"
            placeholder="email@example.com"
          />
        </div>
        <button className="w-full p-3 rounded-full bg-purpleLight text-white md:w-56 hover:bg-darkViolet transition">
          Get Started For Free
        </button>
      </div>
    </div>
  </section>
);

export default Newsletter;
