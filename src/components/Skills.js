import React from "react";

export default function Skills() {
  const skillGroups = [
    {
      title: "Cloud & Platforms",
      skills: [
        { name: "AWS", icon: "☁️" },
        { name: "Oracle Cloud (learning)", icon: "🟦" },
        { name: "Windows Server", icon: "🪟" },
        { name: "Linux (Ubuntu/CentOS)", icon: "🐧" },
      ],
    },
    {
      title: "DevOps & Automation",
      skills: [
        { name: "Terraform", icon: "📜" },
        { name: "Ansible", icon: "⚙️" },
        { name: "Jenkins", icon: "🔁" },
        { name: "GitHub Actions", icon: "🚀" },
      ],
    },
    {
      title: "Containers & Orchestration",
      skills: [
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
      ],
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Prometheus", icon: "📈" },
        { name: "Grafana", icon: "📊" },
        { name: "CloudWatch", icon: "👁️" },
      ],
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: "🔧" },
        { name: "GitHub", icon: "🐙" },
      ],
    },
    {
      title: "CI/CD",
      skills: [
        { name: "Pipeline design", icon: "🧩" },
        { name: "Automated deployments", icon: "⚡" },
        {name: "Infrastructure validation",icon: "⚡" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-3">Skills</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Tools and technologies I use across cloud, automation, CI/CD, containers and monitoring.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="bg-white p-5 rounded-lg shadow-sm text-left">
              <h3 className="font-semibold mb-3">{g.title}</h3>
              <ul className="text-gray-700 space-y-2">
                {g.skills.map((s) => (
                  <li key={s.name} className="flex items-center gap-3">
                    <span className="text-xl">{s.icon}</span>
                    <span>{s.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
