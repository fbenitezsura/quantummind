export default function Button({ children, onClick, type = "button" }) {
    return (
      <button
        type={type}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={onClick()}
      >
        {children}
      </button>
    );
  }
  