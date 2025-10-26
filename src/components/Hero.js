function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-screen text-center" id="home">
      <h2 className="text-4xl font-bold">Hi, I’m Shaikh Imtiyaj 👋</h2>
      <p className="mt-4 text-lg text-gray-600">
        DevOps Engineer who loves automation, AWS, and clean deployments.
      </p>
      <div className="mt-6 space-x-4">
        <a href="#projects" className="bg-blue-500 text-white px-4 py-2 rounded-md">View Projects</a>
        <a href="#contact" className="border border-blue-500 text-blue-500 px-4 py-2 rounded-md">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
