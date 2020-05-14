import React from "react";
import styled from "styled-components";
const Container = styled.div`
  padding: 25px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  background: #070707;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  .name {
    color: #f1ba4c;
    font-weight: 500;
  }
  .footer-item {
    padding: 10px 0;
  }
  @media only screen and (max-width: 312px) {
    justify-content: center;
  }
`;
function Footer() {
  return (
    <Container>
      <div className="footer-item">All rights reserved © 2020</div>
      <div className="footer-item">
        Developed By <span className="name">MBK</span>
      </div>
    </Container>
  );
}

export default Footer;
