import React from "react";

const Notion = ({ img, name, description, tarif }) => {
  return (
    <div className="w-[30%] bg-white p-4 rounded-lg shadow-md">
      {/* Tasvir, nom, tavsif va tarif */}
      <img src={img} alt={name} className="w-full h-32 object-cover rounded-md mb-3" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <p className="text-sm text-green-500">{tarif}</p>
    </div>
  );
};

export default Notion;

