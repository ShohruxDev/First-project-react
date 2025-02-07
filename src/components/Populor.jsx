import img1 from '../assets/f-0.svg'
import Tool from './Tool';

const populor = () => {

  const popularTools = [
    {
      id:1,
      name : 'FIGMA DISIGM',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi minima consequatur est necessitatibus neque quasi magnam voluptas quia?',
      img : img1,
      tarif : 'Free'
    },
    {
      id:2,
      name : 'FIGMA DISIGM',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi minima consequatur est necessitatibus neque quasi magnam voluptas quia?',
      img : img1,
      tarif : 'Free'
    },
    {
      id:3,
      name : 'FIGMA DISIGM',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi minima consequatur est necessitatibus neque quasi magnam voluptas quia?',
      img : img1,
      tarif : 'Free'
    },
    
  ]

  return (
    <div className="flex  items-center flex-wrap w-[100vw] justify-center bg-black">
      <div className="flex items-center w-[905] pt-[80px] flex-col">
        <b className="text-white text-[48px]">Most Popular Tools</b>
        <p className="text-white w-[70%] text-center mt-1">
          Tools for the best Designers and Developers most popularly used in the
          world
        </p>
        <div className='flex w-[70%] justify-center gap-3 px-1 py-3 '>
          { popularTools.map(tool=><Tool key={tool.id} name={tool.name} desciption={tool.description} img={tool.img} tarif={tool.tarif} />) }
        </div>
        <button className="bg-amber-300 border-none rounded-2xl cursor-pointer px-[50px] py-[20px] mt-[30px] mb-[50px] text-amber-900">
          Load more
        </button>
      </div>
    </div>
  );
};
export default populor;
