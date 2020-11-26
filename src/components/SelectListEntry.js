import React from "react";
import "./SelectList.css";

function SelectListEntry(props) {
  const { corporateName, employeeNum, isWorking } = props.data;

  return (
    <>
      <li className="listEntryArea bg-white w-64 h-64 m-4 rounded-2xl p-4 flex flex-col justify-evenly items-center">
        <img src="./img/gear.svg" alt="gear" />
        <h1 className="text-4xl font-bold">{corporateName}</h1>
        <div className="flex flex-row w-full text-center">
          <div className="w-1/2 p-2 border-r border-gray-300 ">
            <p className="text-xl font-bold">직원수</p>
            <p className="flex text-6xl p-4 justify-center items-center">
              {employeeNum}
            </p>
          </div>
          <div className="w-1/2 p-2">
            <p className="text-xl font-bold">근무중</p>
            <p className="flex text-green-400 text-6xl p-4 justify-center items-center">
              {isWorking}
            </p>
          </div>
        </div>
        <button className="border border-gray-200 w-full p-4">입장하기</button>
      </li>
    </>
  );
}

export default SelectListEntry;
