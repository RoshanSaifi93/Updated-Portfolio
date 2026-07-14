function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold">
        {title.split(" ")[0]}{" "}
        <span className="text-purple-500">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      <div className="w-24 h-1 bg-purple-500 rounded-full mx-auto mt-4"></div>

      {subtitle && (
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeading;
