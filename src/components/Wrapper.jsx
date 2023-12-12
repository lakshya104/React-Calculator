const Wrapper = ({ children }) => {
  return (
    <div className=" w-[340px] h-[540px] p-2.5 rounded-xl bg-[#485461] bg-gradient-to-tr">
      {children}
    </div>
  );
};

export default Wrapper;
