// function About() {
//   return (
//     <section id="about" className="p-10 text-center">
//       <h2 className="text-3xl font-bold mb-4">About Me</h2>

//       <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
//         I’m Shaikh Imtiyaj, a DevOps and Infrastructure Engineer who enjoys working where cloud, automation 
//         and day-to-day IT operations meet. Most of my work revolves around AWS, CI/CD pipelines, 
//         containerization, and keeping systems running smoothly for the people who rely on them.

//         <br /><br />

//         I work with tools like Terraform, Ansible, Jenkins, GitHub Actions, Docker and Kubernetes to automate 
//         builds, deployments and infra provisioning. On the ops side, I manage both Windows and Linux servers, 
//         handle patching, monitoring, troubleshooting and everyday tech support across teams.

//         <br /><br />

//         Here’s a quick snapshot of what I work with:
//         <br />
//         • AWS as my main cloud, exploring Orcale & Azure  <br />
//         • Terraform, Ansible and Shell for automation  <br />
//         • CI/CD with Jenkins and GitHub Actions  <br />
//         • Docker and Kubernetes for app delivery  <br />
//         • Monitoring with Prometheus and Grafana  <br />
//         • Windows Server, Linux and endpoint support  <br />
//         • Git and GitHub for version control  <br />

//         <br /><br />

//         I like learning new things especially around cloud security, observability and improving systems 
//         so they run smoother and faster. If you’re building something interesting in cloud or infra, 
//         I’m always up for a conversation.
//       </p>
//     </section>
//   );
// }

// export default About;


import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Left: Photo (desktop left, mobile top) */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="/img2.png"
              alt="Shaikh Imtiyaj portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I’m <strong>Shaikh Imtiyaj</strong>, a DevOps and Infrastructure Engineer working where <strong>Cloud ☁️</strong>, 
            <strong>automation ⚙️</strong> and day-to-day IT operations meet. I build reliable CI/CD pipelines, provision infrastructure
            as code, containerize applications, and keep systems running smoothly for the people who depend on them.
          </p>

          <div className="text-gray-700 leading-relaxed mb-4">
            I work with tools like <strong>Terraform</strong>, <strong>Ansible</strong>, <strong>Jenkins</strong>, <strong>GitHub Actions</strong>,
            <strong>Docker</strong> and <strong>Kubernetes</strong> to automate deployments and infrastructure provisioning.
            I also manage Windows and Linux environments patching, monitoring 📊, troubleshooting and everyday IT support 🛠️.
          </div>

          {/* What I'm good at */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">What I’m good at</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Automating manual workflows and building reliable deployment pipelines</li>
              <li>Designing infra as code for predictable, repeatable environments</li>
              <li>Operational support: monitoring, incident response, and performance tuning</li>
            </ul>
          </div>

            {/* <div className="text-gray-600 text-sm">
              Outside work, I tinker with small automation projects, improve my home lab, and learn new cloud tools.
            </div> */}
          </div>
        </div>
    </section>
  );
}
