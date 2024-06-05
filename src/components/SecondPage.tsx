import company from "../assets/company.jpeg";
const SecondPage = () => {
  return (
    <div className="bg-[#141414] flex xs:flex-col h-full items-center justify-around">
      <img src={company} alt="pic of company" className="w-5/12 xs:w-[90%]" />
      <div className="w-2/5 xs:w-[90%]">
        <div className="mb-16">
          <h1 className="text-[50px] mb-4">Company Profile</h1>
          <p className="text-[15px]">
            Established in 1992, Stratford Accounting is a full-service firm,
            offering affordable accounting solutions to individuals and local
            and international businesses.
          </p>
        </div>
        <a href="" className="bg-[#9B9B9B] p-5 mt-5">
          <button className="">Learn More</button>
        </a>
      </div>
    </div>
  );
};

export default SecondPage;
