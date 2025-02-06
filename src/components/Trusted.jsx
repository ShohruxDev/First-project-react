import img21 from '../assets/lop.svg'

const Trusted = () => {
    return <div className="flex bg-black w-[100vw] items-center">
     <div className="flex flex-col w-[100%] items-center" >
    <div className="flex flex-col w-[80%] h-[30vh] bg-emerald-950 items-center rounded-2xl">
    <p className="text-white mt-6">Trusted more than 150+ brand</p>
    <div className="flex gap-[120px] items-center w[100%] content-between mt-[50px]">
     <img src={img21} alt="" />
     <img src={img21} alt="" />
     <img src={img21} alt="" />
     <img src={img21} alt="" />
    </div>
    </div>
     </div>
    </div>
}
export default Trusted;