import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const NewDocSection: React.FC = () => {
  return (
    <Wrapper>
      <div className="outer">
        <div className="startNewDoc">
          <h3>Start new document</h3>
          <Button>
            <MoreVertIcon className="more" />
          </Button>
        </div>

        <div className="newBlank">
          <div className="imgContainer">
            <img src="/images/blank.png" alt="New Blank Document" />
          </div>
          <p>Blank</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default NewDocSection;

const Wrapper = styled.section`
  background-color: #f8f9fa;
  padding: 11px;
  max-width: 48rem;
  margin: 0 auto;

  .outer {
    .startNewDoc {
      padding: 6px 0;
      margin-left: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h3 {
        font-weight: normal;
        color: rgba(0, 0, 0, 0.7);
      }
      .more {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    .newBlank {
      width: 3rem;
      margin-left: 2rem;
      cursor: pointer;
      border-radius: 10px;

      p {
        margin-top: 0.5rem;
        margin-left: 0.3rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
      }

      .imgContainer {
        border: 2px solid #eee;
        height: 13rem;
        width: 10rem;

        img {
          max-width: 100%;
          max-height: 100%;
        }
        &:hover {
          border-color: rgba(29, 78, 216, 0.5);
        }
      }
    }
  }
`;
