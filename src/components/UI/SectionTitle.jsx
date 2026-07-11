function SectionTitle({
  title,

  subtitle,
}) {
  return (
    <div>
      <h2
        className="

text-5xl

font-bold

"
      >
        {title}
      </h2>

      <p
        className="

text-gray-400

mt-3

"
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle;
