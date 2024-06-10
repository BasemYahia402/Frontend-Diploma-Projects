const Title = ({ text }) => {
  return (
    <div className="flex items-center">
      <span className="w-5 h-10 ltr:mr-5 rtl:ml-5 bg-[#df4444] rounded-md"></span>
      <p className="text-[#df4444] font-semibold text-xl">{text}</p>
    </div>
  );
};

export default Title;
