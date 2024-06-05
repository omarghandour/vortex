import "./com.css";
const Home = () => {
  return (
    <div className=" home h-full bg-center bg-no-repeat bg-cover flex flex-col items-start justify-between">
      <img src="../src/assets/logo.svg" alt="" className=" h-48 ml-[10%]" />
      <div className=" m-28 text-white sm:m-16 xs:m-8">
        <h1
          style={{ lineHeight: "1" }}
          className=" pb-14 text-[600%] xs:text-[400%]"
        >
          Software <br />
          <span>Company</span>
        </h1>
        <h4 className=" sm:text-[2.2rem] xs:text-[1.5rem]">
          Expertise. Commitment. Value.
        </h4>
      </div>
    </div>
  );
};

export default Home;
