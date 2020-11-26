import React from "react";
import { Link } from 'react-router-dom';

function DetailsNav(props) {
  return (
    <div
      className="side-nav-container w-64 
        bg-gray-100 tracking-widest"
    >
      <div className="close-btn-container flex justify-end px-6 py-2">
        <button className="">×</button>
      </div>
      <div className="propfile-container px-12 py-2">
        <span className="block">{`${props.owner}님`}</span>
        <span className="block">안녕하세요.</span>
      </div>
      <ul className="side-nav-list">
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details">
            <i className="fas fa-home mr-10"></i>
            <span>관리사업장</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/inquiry">
            <i className="fas fa-home mr-10"></i>
            <span>문의게시판</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/account">
            <i className="fas fa-home mr-10"></i>
            <span>계정정보</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/qrcode">
            <i className="fas fa-home mr-10"></i>
            <span>QR코드</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/download">
            <i className="fas fa-home mr-10"></i>
            <span>엑셀 다운로드</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/usage">
            <i className="fas fa-home mr-10"></i>
            <span>무료 사용</span></Link>
        </li>
        <li className="side-nav-content">
          <Link className="side-nav-link w-full block py-4 px-6" to="/details/price">
            <i className="fas fa-home mr-10"></i>
            <span>요금 안내</span></Link>
        </li>
      </ul>
    </div>
  );
}

export default DetailsNav;
