 const Become = () => {
    return <div className="flex w-[100vw] bg-black items-center justify-center">
      <div className="flex items-center flex-col w-[90%] ">
       <b className="text-[40px] text-white mt-[100px]">Become a contributor?</b>
       <p className="text-white w-[30%] text-center mt-[30px]">Join us and get tips & tricks to become a great Designer and Developer</p>
      <div className="flex relative">
      <input className="px-[100px]  py-[10px] bg-amber-200 rounded-2xl mt-[70px]" type="text" placeholder="Enter your email" />
      <button className="px-[20px] mt-[75px] ml-[270px] rounded-xl py-[5px] bg-amber-400 hover:bg-amber-500 absolute">Join Us</button>
      </div>
      </div>
      
    </div>
 }
 export default Become;