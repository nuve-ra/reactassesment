const Button = ({ value, onClick }) => {
  return (
    <button
      style={{
        padding: "0.7rem 1rem",
        border: "none",
        backgroundColor: "#222222",
        color: "#ffffff",
        boxShadow: "5px 5px 1px 0px rgba(128,128,128, 0.2)",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
