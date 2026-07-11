import HeroButtons from "./HeroButtons";
import SocialLinks from "./SocialLinks";

function HeroContent() {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-10
      shadow-[0_0_40px_rgba(139,92,246,.2)]
      "
    >
      <span className="text-purple-400">👋 Hello, I'm</span>

      <h1 className="text-6xl font-bold mt-5">
        Roshan <span className="text-purple-500">Saifi</span>
      </h1>

      <h2 className="text-3xl mt-6 text-purple-400">Frontend Developer</h2>

      <p className="text-gray-300 mt-8 leading-8">
        I build modern web applications using React, JavaScript and modern UI
        design.
      </p>

      <HeroButtons />

      <SocialLinks />
    </div>
  );
}

export default HeroContent;
