const ButtonBox = ({ children }) => {
  return (
    <div className="w-[100%] h-[calc(100%-110px)] grid grid-cols-4 grid-rows-5 gap-2.5">
      {children}
    </div>
  );
};

export default ButtonBox;
