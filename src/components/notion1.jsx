import React from "react";
import Notion from "./notion"; // Notion komponentini to'g'ri import qilish

const Populorr = () => {
  const popularTools = [
    {
      id: 1,
      name: 'FIGMA DESIGN',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi minima consequatur est necessitatibus neque quasi magnam voluptas quia?',
      img: 'path/to/your/image.jpg', // Tasvir manzilingizni kiriting
      tarif: 'Free',
    },
    // Kerak bo'lsa, boshqa vositalarni qo'shing
  ];

  return (
    <div className="flex items-center w-[100vw] bg-black justify-center">
      <div className="flex items-center w-[80%] bg-amber-50 h-[40vh]">
        <div className="flex w-[70%] justify-center gap-3 px-1 py-3">
          {popularTools.map((tool) => (
            <Notion
              key={tool.id}
              name={tool.name}
              description={tool.description}
              img={tool.img}
              tarif={tool.tarif}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Populorr;
