import React from 'react';
import logo from "../../img/logo.png";
import "./styled.scss";
import { UserOutlined } from '@ant-design/icons';

function Header() {
  
  let user = localStorage.getItem("fullName")

  return (
    <div className="main-wrapper--header">
      <div className="header">
        <img className="logo" src={logo} alt="ecozum-logo" />
        <h3><UserOutlined className="user-icon" />{user}</h3>
      </div>
    </div>
  )
}

export default React.memo(Header);