function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        px-8
        py-4
        rounded-xl
        bg-purple-600
        hover:bg-purple-700
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

export default PrimaryButton;