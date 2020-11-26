import React from "react";
import "./Login.css";

function Login(props) {
  return (
    <div className="flex h-screen justify-between bg-aqua-200">
      <div className="loginArea flex flex-1 h-full justify-center">
        <div className="inner flex flex-col h-full justify-center w-full items-center sm:w-3/4 lg:w-3/4">
          <div className="pb-12 lg:pb-32">
            <img className="w-32" src="./img/logo.png" alt="logo" />
          </div>
          <div className="content flex flex-col mt-10 py-30 px-70  w-3/4">
            <h2 className="text-3xl">로그인</h2>
            <input
              type="text"
              placeholder="휴대폰번호"
              maxLength="11"
              className="border-b border-gray-300"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="border-b border-gray-300 "
            />
            <button
              className="cursor-pointer py-4 mt-20 text-lg text-white bg-blue-500 "
              onClick={(e) => {
                e.preventDefault();
                props.handleisLogin();
              }}
            >
              로그인
            </button>
            <span className="text-sm text-gray-500 mt-4">
              * 샵솔 관리자모드는 chrome 브라우저에 최적화되어있습니다.
            </span>
          </div>
        </div>
      </div>
      <div
        className="imageArea w-1/2 h-full overflow-y-hidden bg-auto bg-no-repeat bg-left"
        style={{
          backgroundImage: `url("http://ceo.shop-sol.com/img/manager_login_page_background.png")`,
        }}
      ></div>
    </div>
  );
}

export default Login;
