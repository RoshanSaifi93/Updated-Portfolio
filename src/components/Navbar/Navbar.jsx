function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-black/70 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Roshan <span className="text-purple-500">Saifi</span>
        </h1>

        <ul className="hidden md:flex gap-8">
          <li className="hover:text-purple-500 cursor-pointer">Home</li>

          <li className="hover:text-purple-500 cursor-pointer">About</li>

          <li className="hover:text-purple-500 cursor-pointer">Skills</li>

          <li className="hover:text-purple-500 cursor-pointer">Projects</li>

          <li className="hover:text-purple-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
