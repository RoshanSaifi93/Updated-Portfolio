function Badge({ children }) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-green-500/20
        text-green-400
        font-medium
      "
    >
      {children}
    </div>
  );
}

export default Badge;