function Skills() {
  const skills = ["AWS", "Windows", "Linux", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Terraform", "Ansible", "GitHub", "CI/CD"];
  
  return (
    <section id="skills" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <span key={skill} className="bg-white shadow px-4 py-2 rounded-md">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;