import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left: Photo */}
        <div className="md:w-1/3 flex justify-center md:justify-start">
          <div className="w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
            <img
              src="/img2.png"
              alt="Shaikh Imtiyaj portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-2/3 text-center md:text-left max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            I’m <strong>Shaikh Imtiyaj</strong>, a DevOps and Infrastructure Engineer working where
            <strong> Cloud ☁️ </strong> and <strong> automation ⚙️ </strong> meet.  
            I build CI/CD pipelines, write infrastructure as code, containerize applications,
            and keep systems running smoothly for the people who depend on them.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I work with tools like <strong>Terraform</strong>, <strong>Ansible</strong>, <strong>Jenkins</strong>,
            <strong> GitHub Actions</strong>, <strong>Docker</strong> and <strong>Kubernetes</strong> to automate deployments.
            I also manage Windows & Linux servers patching 🐧, monitoring 📊, troubleshooting, and providing daily IT support 🛠️.
          </p>

          {/* What I'm good at */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">What I’m good at</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Automating manual workflows and building CI/CD pipelines</li>
              <li>Designing infra as code for predictable, repeatable deployments</li>
              <li>Operational support: monitoring, incident response & tuning</li>
            </ul>
          </div>

          {/* Currently Learning + Outside Work */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">

            {/* Example of optional learning section */}
            {/*
            <div className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">
              Currently learning: Oracle Cloud Infrastructure — hands-on project
            </div>
            */}

            <div className="text-gray-600 text-sm">
              Outside work, I tinker with automation projects, improve my home lab, and explore new cloud tools.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
