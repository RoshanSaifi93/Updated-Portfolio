function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        px-8
        py-4
        rounded-xl
        border
        border-gray-500
        hover:border-purple-500
        hover:text-purple-400
        transition-all
        duration-300
        hover:scale-105
        font-medium
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;