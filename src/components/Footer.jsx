import image from "../assets/s-0.svg";
const Footer = () => {
  return (
    <div className="flex w-[100vw] bg-black items-center justify-center ">
      <div className="flex flex-col w-[100%] items-center">
        <div className="flex w-[100%] h-[4px] bg-blue-950 mt-[170px]"></div>
        <div className="flex w-[90%] mt-[50px]  items-center justify-between">
          <div className="flex flex-col  py-[20px] text-white w-[20%]">
            <div className="flex items-center gap-[15px]">
              <img src={image} alt="" />
              <b className="text-[20px] mb-[20px]">antools.</b>
            </div>
            <p className="mb-[20px]">Copyright 2021. Antools</p>
            <p className="w-[90%]">
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>
          </div>
          <div className="flex flex-col  py-[20px] text-white w-[20%]">
            <div className="flex items-center gap-[15px]">
              <b className="text-[20px] mb-[20px]">Contact Us</b>
            </div>
            <p className="mb-[20px]">+621987463</p>
            <p className="w-[90%]">
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>
          </div>
          <div className="flex flex-col  py-[20px] text-white w-[20%]">
            <div className="flex items-center gap-[15px]">
              <b className="text-[20px] mb-[20px]">Categories</b>
            </div>
            <p className="mb-[20px]">Copyright 2021. Antools</p>
            <p className="w-[90%]">
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>
          </div>
          <div className="flex flex-col  py-[20px] text-white w-[20%]">
            <div className="flex items-center gap-[15px]">
              <b className="text-[20px] mb-[20px]">Company Info</b>
            </div>
            <p className="mb-[20px]">Copyright 2021. Antools</p>
            <p className="w-[90%]">
              Antool is a web collection of information on paid or free Design
              and Development tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
