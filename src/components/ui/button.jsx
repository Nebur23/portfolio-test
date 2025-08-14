const Button = ({ text, style }) => {
  return (
    <button
      className={`${
        style && style
      } border-border font-bold font-playfair py-2 px-4 rounded-none hover:bg-blue-700 transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;
