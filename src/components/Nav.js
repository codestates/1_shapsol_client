import React from "react";

function Nav(props) {
  // 로그인이 되면 버튼은 '로그아웃'으로 표시된다.
  return (
    <div className="h-full flex items-center mx-10">
      <a href="http://www.shop-sol.com/">
        <img className="w-20" src="./img/logo.png" alt="logo" />
      </a>
      <button
        className="ml-auto text-white py-2 px-10 bg-red-500 font-normal text-xs rounded"
        onClick={(e) => {
          e.preventDefault();
          props.handleisLogin();
        }}
      >
        로그아웃
      </button>
    </div>
  );
}

export default Nav;
