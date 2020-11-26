import React, { useState, useEffect } from "react";
import "../components/SelectList.css";
import { SelectListEntry } from "../components";

function SelectList(props) {
  //사업장ID, 사업장명, 직원수, 근무중 인원수
  const [bsnInfo, setBsnInfo] = useState([
    {
      id: 1,
      corporateName: "위솝",
      employeeNum: 8,
      isWorking: 5,
    },
  ]);

  const [nextID, setNextID] = useState(2);

  //새로운 사업장 추가
  const handleAddList = () => {
    const newBsnInfo = bsnInfo.concat({
      id: nextID,
      corporateName: `추가${nextID}`,
      employeeNum: 1,
      isWorking: 0,
    });

    setNextID(nextID + 1);
    setBsnInfo(newBsnInfo);
  };

  return (
    <div className="selectList-wrap flex flex-wrap flex-col items-center">
      <div className="serachArea flex flex-col w-3/4 items-center mb-10">
        <h2 className="text-2xl font-bold p-5">사 업 장 검 색</h2>
        <div className="searchBar">
          <input
            className="p-2 border-b border-gray-500 bg-transparent"
            type="text"
            placeholder="사업장을 검색해주세요"
          ></input>
          <img src="./img/search.svg" alt="search" />
        </div>
      </div>
      <div className="listArea w-full h-screen overflow-y-auto px-12">
        <ul className="flex flex-wrap flex-row justify-center">
          {bsnInfo.map((data) => (
            <SelectListEntry key={data.id} data={data} />
          ))}
          <button
            className="listEntryBtn bg-transparent m-4 rounded-2xl p-4 border-dashed border-2 border-gray-700 border-opacity-25"
            onClick={(e) => {
              e.preventDefault();
              handleAddList();
            }}
          >
            <p className="text-6xl text-gray-500 text-opacity-25">+</p>
            <p className="text-xl text-gray-700 text-opacity-25">
              사업장 추가하기
            </p>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default SelectList;
