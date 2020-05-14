import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Hamburger from "./Hamburger";
import SideBar from "./SideBar";

const Container = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #000;
    height: 80px;
    z-index: 2;
    width: 100%;
  }
  span {
    line-height: 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 18px 20px;
    letter-spacing: 0.6px;
    color: #ffffff;
    transition: all 0.4s;
    &:hover {
      color: #f1ba4c;
    }
  }
  .active-link {
    span {
      color: #f1ba4c;
    }
  }
  .hamburger {
    display: none;
  }
  @media only screen and (max-width: 740px) {
    .hamburger {
      display: block;
    }
    .nav-link {
      display: none;
    }
  }
`;
const Header = () => {
  const [SideBarIsActive, toggleSideBar] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 220, height: 46) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Container>
      <div className="header-wrapper">
        <div className="link-wrp">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
          </Link>
        </div>
        <div className="link-wrp">
          <Link to="/" activeClassName="active-link" className="nav-link">
            <span>Home</span>
          </Link>
          <Link to="/" className="nav-link">
            <span>About Us</span>
          </Link>
          <Link to="/" className="nav-link">
            <span>Get In Touch</span>
          </Link>
          <span
            className="hamburger"
            onClick={() => toggleSideBar(!SideBarIsActive)}
          >
            <Hamburger />
          </span>
        </div>
      </div>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
    </Container>
  );
};

export default Header;
