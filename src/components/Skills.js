function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Tools and technologies I work with across cloud, DevOps automation, CI/CD, containers, 
        monitoring and system administration.
      </p>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Cloud */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">Cloud & Platforms</h3>
          <ul className="text-gray-700 space-y-1">
            <li>AWS</li>
            <li>Oracle Cloud (learning)</li>
            <li>Windows Server</li>
            <li>Linux (Ubuntu, CentOS)</li>
          </ul>
        </div>

        {/* DevOps Tools */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">DevOps & Automation</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Terraform</li>
            <li>Ansible</li>
            <li>Shell Scripting</li>
            <li>GitHub Actions</li>
            <li>Jenkins</li>
          </ul>
        </div>

        {/* Containers */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">Containers & Orchestration</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Docker Compose</li>
          </ul>
        </div>

        {/* Monitoring */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">Monitoring & Observability</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Prometheus</li>
            <li>Grafana</li>
            <li>CloudWatch</li>
          </ul>
        </div>

        {/* Version Control */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">Version Control</h3>
          <ul className="text-gray-700 space-y-1">
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        {/* CI/CD */}
        <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
          <h3 className="font-semibold mb-3">CI/CD & Pipelines</h3>
          <ul className="text-gray-700 space-y-1">
            <li>End-to-end pipeline setup</li>
            <li>Automated deployments</li>
            <li>Infrastructure validation</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
