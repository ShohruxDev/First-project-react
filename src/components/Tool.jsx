import React from "react";
import likeIcon from "../assets/like.svg";
import folderIcon from "../assets/folder.svg";
import figmaIcon from '../assets/figma-icon.svg'

const Tool = ({ img, name, desciption, tarif }) => {
  return (
    <div className="bg-cyan-950 w-[392px] h-[294px] px-3 py-2">
      <div className="flex justify-start">
        <img className={figmaIcon} src={img} alt="" />
        <div>
          <h3>{name}</h3>
          <p className="text-yellow-600">{tarif}</p>
        </div>
      </div>
      <p className="text-slate-400" >{desciption}</p>
      <div>
        <div>
          <img src={likeIcon} alt="Like icon" />
          <img src={folderIcon} alt="Folder icon" />
        </div>
        <button className="px-3 rounded-md py-1 hover:bg-yellow-500">Visit</button>
      </div>
    </div>
  );
};

export default Tool;
