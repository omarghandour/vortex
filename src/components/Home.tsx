import "./com.css";
import logo from "../assets/logo.svg";
const Home = () => {
  return (
    <div className=" bg-[url('../src/assets/main.png')] h-full bg-center bg-no-repeat bg-cover flex flex-col items-start justify-between">
      <img src={logo} alt="" className=" h-48 ml-[10%]" />
      <div className=" m-28 text-white sm:m-16 xs:m-8">
        <h1
          style={{ lineHeight: "1" }}
          className=" pb-14 text-[600%] xs:text-[400%]"
        >
          Software
          <br />
          <span>Company</span>
        </h1>
        <h4 className=" sm:text-[2.2rem] xs:text-[1.5rem] text-[2.2rem] text-[#9B9B9B]">
          Expertise. Commitment. Value.
        </h4>
      </div>
    </div>
  );
};

export default Home;
