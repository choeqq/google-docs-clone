import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header: React.FC = () => {
  return (
    <Wrapper>
      <div className="menuWrapper">
        <Button>
          <MenuIcon className="menu" />
        </Button>
        <div className="docsContainer">
          <Button>
            <DescriptionIcon className="desc" />
          </Button>
          <h2>Docs</h2>
        </div>
      </div>

      <div className="searchContainer">
        <SearchIcon className="search" />
        <input type="text" placeholder="Search" className="searchInput" />
      </div>

      <div className="accContainer">
        <AppsIcon className="apps" />
        <AccountCircleIcon className="acc" />
      </div>
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
  justify-content: space-between;
  padding: 10px 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  .menuWrapper {
    display: flex;
    align-items: center;
  }

  .menu {
    height: 25px;
    width: 25px;
    border: none;
  }
  .desc {
    height: 40px;
    width: 40px;
  }
  .docsContainer {
    display: flex;
    color: rgba(0, 0, 0, 0.7);
    align-items: center;
  }
  .searchContainer {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    align-items: center;
    padding: 2px 5px;
    margin: 0 8px;
    background-color: transparent;
    border-radius: 7px;
    max-width: 768px;

    @media (min-width: 576px) {
      & {
        justify-content: flex-start;
        background-color: rgba(0, 0, 0, 0.01);
      }
    }

    .search {
      color: rgba(0, 0, 0, 0.7);
    }

    .searchInput {
      display: none;
      border: none;
      flex-grow: 1;
      padding: 10px 5px;
      outline: none;
      background-color: transparent;

      @media (min-width: 576px) {
        & {
          display: flex;
        }
      }
    }
  }
  .accContainer {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 2px 10px;

    .apps {
      color: rgba(0, 0, 0, 0.7);
      height: 25px;
      width: 25px;
    }
    .acc {
      color: rgba(0, 0, 0, 0.7);
      height: 45px;
      width: 45px;
      margin-left: 10px;
    }
  }
`;
