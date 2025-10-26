function Contact() {
  return (
    <section id="contact" className="p-10 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-gray-600">Let’s connect and talk tech!</p>
      <div className="mt-4 space-x-4">
        <a href="mailto:imtiyajshaikh6083@gmail.com?subject=Hello%20Imtiyaj&body=I%20saw%20your%20portfolio!" className="text-blue-500">Email</a>
        <a href="https://www.linkedin.com/in/imtiyajshaikh/" className="text-blue-500" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/imtiyaj43" className="text-blue-500" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
