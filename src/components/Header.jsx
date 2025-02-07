import image from "../assets/s-0.svg";

const Header = () => {
  return (
    <div className="flex  w-[100vw] flex-col  bg-black items-center py-3">
      <div className="flex items-center w-[90%] justify-between">
        <div className="flex items-center gap-[20px]">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-md bg-amber-400">
            <img src={image} alt="" />
          </div>
          <b className="text-zinc-50">antools.</b>
        </div>
        <div className="flex items-center gap-[12px]">
          <a href="" className="text-amber-100 text-[14px]">
            Home
          </a>
          <a href="" className="text-amber-100 text-[14px]">
            Categories{" "}
          </a>
          <a href="" className="text-amber-100 text-[14px]">
            {" "}
            My Collections{" "}
          </a>
          <a href="" className="text-amber-100 text-[14px]">
            Blog
          </a>
        </div>
        <div className="flex gap-[15px] items-center">
          <b className="text-amber-50">Login</b>
          <button className=" px-[30px] py-[10px] bg-amber-500 text-white rounded-xl cursor-pointer hover:bg-amber-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
