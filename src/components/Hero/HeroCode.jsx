import { useEffect, useState } from "react";

function HeroCode() {
  const code = `const developer = { name: "Roshan Saifi", role: "Frontend Developer",
  skills: ["HTML","CSS","JavaScript","React","Tailwind CSS","Bootstrap","Git","GitHub"],
  status: "Available for Work"
};`;

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(code.slice(0, index));

      index++;

      if (index > code.length) {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
      font-mono
      text-sm
      leading-7
      text-purple-400/60
      whitespace-pre-wrap
      select-none
      "
    >
      {displayText}

      <span className="animate-pulse text-purple-500">|</span>
    </div>
  );
}

export default HeroCode;
