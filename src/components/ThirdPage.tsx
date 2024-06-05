import hand from "../assets/s2.png";

const ThirdPage = () => {
  return (
    <div className="bg-[#141414] flex h-full items-center justify-around xs:flex-col sm:flex-col">
      <div className="flex flex-col justify-between w-1/2 xs:w-full sm:w-full xs:items-center sm:items-center">
        <h1 className="text-[50px] mb-12">Our Services</h1>
        <img src={hand} alt="" className="w-4/5" />
      </div>
      <div className="flex flex-col gap-10">
        <div>
          <div className="flex items-center">
            <span className="text-[#9B9B9B] text-[30px] pr-3">01</span>{" "}
            <h1 className="text-[26px]">Tax Preparation</h1>
          </div>
          <p className="text-[14px]">
            We prepare everything you need for your tax return
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-[#9B9B9B] text-[30px] pr-3">02</span>{" "}
            <h1 className="text-[26px]">Start-up Package</h1>
          </div>
          <p className="text-[14px]">
            We build financial models you can pitch to investors
          </p>
        </div>
        <div>
          <div className="flex items-center">
            <span className="text-[#9B9B9B] text-[30px] pr-3">03</span>{" "}
            <h1 className="text-[26px]">Wealth Management</h1>
          </div>
          <p className="text-[14px]">
            We deliver thoughtful investment advisory services
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
