function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <a href="#home" className="text-2xl font-bold">
          Roshan <span className="text-purple-500">Saifi</span>
        </a>

        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="#home"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#journey"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Journey
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
