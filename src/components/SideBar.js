import styled from "styled-components";
import { Link } from "gatsby";
import React from "react";

const Container = styled.div`
  nav {
    width: 0em;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transition: width 0.8s ease;
    background: #000;
    white-space: nowrap;
    overflow: hidden;
    z-index: 20000;
    color: #fff;
    max-width: 375px;
  }
  .sidebar-content {
    width: 90%;
    height: 100%;
    margin: 100px auto;
    font-size: 1.2em;
    letter-spacing: 2px;
    display: flex;
    flex-direction: column;
  }
  .SideBar-active {
    width: 100vw;
  }
  a {
    font-size: 14px;
    margin: 0px 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 20px 0px;
    transition: all 0.5s;
    &:hover {
      color: #f1ba4c;
    }
  }
  .close {
    float: right;
    margin-right: 3em;
    margin-top: 1.75em;
    cursor: pointer;
    fill: #fff;
  }
`;

const SideBar = ({ SideBarIsActive, toggleSideBar }) => {
  return (
    <Container>
      <nav className={SideBarIsActive ? `SideBar-active` : ``}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className="close"
          onClick={() => toggleSideBar(!SideBarIsActive)}
        >
          <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
        </svg>
        <div className="sidebar-content">
          <Link to="/" onClick={() => toggleSideBar(!SideBarIsActive)}>
            Home
          </Link>
          <Link to="/" onClick={() => toggleSideBar(!SideBarIsActive)}>
            About Us
          </Link>
          <Link to="/" onClick={() => toggleSideBar(!SideBarIsActive)}>
            Get In Touch
          </Link>
        </div>
      </nav>
    </Container>
  );
};

export default SideBar;
