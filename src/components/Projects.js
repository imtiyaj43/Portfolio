function Projects() {
  const projects = [
    { title: "OnFinance App", desc: "Deployed Flask app on AWS EKS using Terraform and CI/CD.", link: "https://github.com/imtiyaj43" },
    { title: "Node.js Deployment", desc: "Containerized Node.js app with NGINX, MongoDB, and Redis on EC2.", link: "https://github.com/imtiyaj43" },
  ];

  return (
    <section id="projects" className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-500 mt-3 inline-block">View on GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;