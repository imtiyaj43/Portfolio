function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 py-10"
    >
      {/* Left: Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Hi, I’m Shaikh Imtiyaj <span className="inline-block">👋</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl">
          DevOps Engineer who builds reliable infrastructure, automates CI/CD pipelines,
          and deploys apps on AWS.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50"
          >
            Contact Me
          </a>

          <a
            href="/Shaikh_Imtiyaj_CV.pdf"
            download
            className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-5 py-2 rounded-md hover:bg-slate-50"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0 z-10">
        <img
          src="/img2.png"
          alt="Shaikh Imtiyaj"
          
        />
      </div>
    </section>
  );
}

export default Hero;
