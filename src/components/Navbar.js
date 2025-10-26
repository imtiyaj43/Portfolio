function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed w-full top-0 z-50">
      <h1 className="text-xl font-bold">Shaikh Imtiyaj</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-500">About</a>
        <a href="#skills" className="hover:text-blue-500">Skills</a>
        <a href="#projects" className="hover:text-blue-500">Projects</a>
        <a href="#contact" className="hover:text-blue-500">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;