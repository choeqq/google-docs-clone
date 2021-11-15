import React from "react";
import styled from "styled-components";
import Button from "@mui/material/IconButton";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <button className="menu">
        <Button>Hello</Button>
      </button>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 2px 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  .menu {
    color: blue;
    height: 20px;
    width: 20px;
    border: none;
  }
  .logo {
  }
`;
