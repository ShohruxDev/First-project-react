import imgg from '../assets/img-0.svg'
import gr from '../assets/search-0.svg'
import fr from '../assets/f-0.svg'
import fr1 from '../assets/f-1.svg'
import fr2 from '../assets/f-2.svg'
const Aweseme = () => {
    return <div className="flex w-[100vw] items-center bg-black pt-[50px] justify-center">
    <div className="flex items-center w-[90%]">
    <div className="flex flex-col">
    <b className="text-[50px] text-white  w-[60%]">Awesome tools for Designer & Developer.</b>
    <p className="text-white w-[40%] mt-5 mb-[50px]">Antool is a web collection of information on paid or free Design and Development tools</p>
    <div className="flex relative ">
        <input className='px-[110px] py-[12px] bg-blue-950 rounded-2xl absolute z-3' type="text" />
        <div className="flex items-center w-[24vw] h-[40px] absolute z-10 bg-inherit mt-1 ml-4 justify-between">
         <img src={gr} alt="" />
         <button className='px-[20px] py-[8px] bg-amber-500 hover:bg-amber-600 cursor-pointer rounded-xl border-none '>Search</button>
        </div>
    </div>
    <div className="flex items-center gap-[15px] mt-[120px] mb-3">
     <img src={fr} alt="" />
     <img src={fr1} alt="" />
     <img src={fr2} alt="" />
    </div>
    </div>
   
    <img className='w-[30%]' src={imgg} alt=""/>
    </div>
    </div>
}
export default Aweseme;