import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
//pages
import { Login, Details, SelectList } from "./pages";

//components
import { Nav } from "./components";

function App() {
  let history = useHistory();

  const [isLogin, setIslogin] = useState(true);
  const [currentBsn, setCurrentBsn] = useState({
    id: "",
    corporateName: "",
    owner: "",
    employeeNum: "",
    isWorking: "",
  });
  const [bsnInfo, setBsnInfo] = useState([
    {
      id: 1,
      corporateName: "위솝",
      owner: "난대표",
      employeeNum: 8,
      isWorking: 5,
    },
    {
      id: 2,
      corporateName: "테스트",
      owner: "테스트대표",
      employeeNum: 3,
      isWorking: 1,
    },
  ]);

  const [nextID, setNextID] = useState(3);

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

  const handleLinktoDetail = (id) => {

    console.log("입장하기 클릭");
    console.log('id : ', id);
    //id값에따라 detail 페이지 나타내기 - 여기서 owner 넘겨주기
    // http://localhost:3000/details?id=1
    const currentBsn = bsnInfo.filter(store => {
      return store.id === id
    });
    setCurrentBsn(currentBsn);
    history.push('/details');
  };

  const handleisLogin = () => {
    console.log("로그인버튼클릭");
    setIslogin(!isLogin);

    history.push("/select");
  };


  return (
    <div className="wrap">
      {isLogin ? (
        <>
          <div className="header-container">
            <header className="w-full border-b border-gray-300">
              <Nav handleisLogin={handleisLogin} />
            </header>
          </div>
          <div className="contents-container ">
            <Switch>
              <Route path="/select">
                <SelectList
                  handleLinktoDetail={handleLinktoDetail}
                  handleAddList={handleAddList}
                  data={bsnInfo}
                />
              </Route>
              {/* //select에서 id를 props로 전달받아야한다. */}
              <Route path="/details" >
                <Details data={currentBsn} />
              </Route>
            </Switch>
            {/* <div className="contents-header" />
            <SelectList /> */}
          </div>
        </>
      ) : (
          <>
            <Login handleisLogin={handleisLogin} />
          </>
        )}
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

// <Switch>
//   <Route path="/select" component={SelectList} />
//   {/* //select에서 id를 props로 전달받아야한다. */}
//   <Route path="/detail/:id" />
// </Switch>;
