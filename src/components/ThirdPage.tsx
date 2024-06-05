import hand from "../assets/s2.png";

const ThirdPage = () => {
  return (
    <div className=" bg-[#141414] flex h-full">
      <div className="flex flex-col justify-between w-1/2">
        <h1>Our Services</h1>
        <img src={hand} alt="" className=" h-1/3 " />
      </div>
      <div>
        <div>
          <span>01</span> <h1>Tax Preparation</h1>
          <p>We prepare everything you need for your tax return</p>
        </div>
        <div>
          <span></span> <h1></h1> <p></p>
        </div>
        <div>
          <span></span> <h1></h1> <p></p>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
