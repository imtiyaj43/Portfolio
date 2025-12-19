function Projects() {
  const projects = [
    {
      title: "Node.js Application Deployment on Ubuntu",
      desc: "Deployed a production-ready Node.js application using NGINX as a reverse proxy with MongoDB 7.0 and Redis on Ubuntu. Includes service setup, security configuration, and deployment automation.",
      tech: ["Node.js", "NGINX", "MongoDB", "Redis", "Ubuntu", "AWS"],
      link: "https://github.com/imtiyaj43/Application-Deployment-With-Node.js-NGINX-MongoDB-7.0-and-Redis-on-Ubuntu.git",
    },
    {
      title: "Microservices CI/CD Pipeline on AWS EKS",
      desc: "Designed and implemented a CI/CD pipeline for microservices using Jenkins and Docker, deploying to AWS EKS with automated builds, container image management, and rolling deployments.",
      tech: ["AWS", "EKS", "Jenkins", "Docker", "Kubernetes", "CI/CD"],
      link: "https://github.com/imtiyaj43/Microservice.git",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Projects</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          A selection of hands-on projects where I designed, deployed, and automated real-world systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

              <p className="text-gray-700 mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white border px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
