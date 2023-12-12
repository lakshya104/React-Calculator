const Button = ({btnClassName, value, onClick }) => {
  return (
    <button
      onClick={onClick}
    //   className="border-0 border-none bg-sky-600 text-white outline-none font-bold rounded-xl hover:bg-white hover:text-sky-600"
    className={btnClassName === "button" ? "border-0 border-none bg-sky-600 text-white outline-none font-bold rounded-xl hover:bg-white hover:text-sky-600" : "border-0 grid-cols-3 w-[150px] border-none bg-white text-sky-600 outline-none font-bold rounded-xl hover:bg-sky-600 hover:text-white"}
    >
      {value}
    </button>
  );
};

export default Button;
