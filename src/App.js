import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
//pages

//components
import { Nav } from "./components";

function App() {
  return (
    <div className="wrap">
      <header className="w-full border-b border-gray-300">
        <Nav />
      </header>
      <div className="contents">
        <Switch>
          <Route path="/select" />
          {/* //select에서 id를 props로 전달받아야한다. */}
          <Route path="/detail/:id" />
        </Switch>
      </div>
    </div>
  );
}

export default App;

// Router path

// - / = sholsol.com
// - /login
// - /select - 사업장 선택페이지 : 사업장 id를 넘긴다.
// - /detail/:id - 사업장별 관리페이지(id로 구분)

// 의문사항
// select 페이지에서 detail로 넘어갔을 떄 전체 정보를 받아올지
// detail로 넘어갈 때 기본정보만 받아고, 세부정보를 때에 따라 요청할지
