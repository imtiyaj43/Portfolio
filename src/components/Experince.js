function Experience() {
  return (
    <section id="experience" className="p-10 bg-gray-100 text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>

      {/* Intellinez Systems */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold">Project Engineer L2 – DevOps & Cloud Infrastructure</h3>
        <p className="text-gray-600">Intellinez Systems · Full-time</p>
        <p className="text-gray-600 mb-3">Jun 2025 – Present · 9 mos | Chandigarh, India · On-site</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Collaborated with the infrastructure and cloud team to design and deploy scalable systems on AWS & Windows.</li>
          <li>Automated CI/CD pipelines, enhancing deployment efficiency and reducing time-to-market.</li>
          <li>Implemented monitoring solutions using Prometheus and Grafana, improving system reliability.</li>
          <li>Utilized Docker and Kubernetes for orchestration, streamlining application deployment processes.</li>
        </ul>
        <p className="mt-3"><strong>Skills:</strong> Amazon Web Services (AWS) · Windows · Git · GitHub · GitHub Actions · AppDynamics · Rackspace Cloud</p>
      </div>

      {/* TecSpeak IT Solutions */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">DevOps Engineer</h3>
        <p className="text-gray-600">TecSpeak IT Solutions · Full-time</p>
        <p className="text-gray-600 mb-3">Feb 2023 – Mar 2025 · 2.2 years | Sangli-Miraj and Kupwad, Maharashtra, India · On-site</p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Designed, deployed, and maintained scalable AWS cloud solutions, including secure VPC architecture with subnets, route tables, and internet/NAT gateways.</li>
          <li>Configured IAM roles, policies, and permissions for enhanced security and service integration.</li>
          <li>Developed and maintained CI/CD pipelines using Jenkins, automating build, testing, and deployment processes while reducing deployment time by 25%.</li>
          <li>Implemented containerization using Docker and Kubernetes, enabling auto-scaling and auto-healing features to improve reliability and scalability by 30%.</li>
          <li>Automated infrastructure provisioning with Terraform and managed configurations using Ansible, reducing setup time and human error by 15%.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
