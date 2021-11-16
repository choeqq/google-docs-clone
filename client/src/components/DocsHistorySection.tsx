import React from "react";
import styled from "styled-components";
import FolderIcon from "@mui/icons-material/Folder";

const DocsHistorySection: React.FC = () => {
  return (
    <Wrapper>
      <div className="inner">
        <h3>My Documents</h3>
        <p>Date Created</p>
        <FolderIcon className="folder" />
      </div>
    </Wrapper>
  );
};

export default DocsHistorySection;

const Wrapper = styled.section`
  max-width: 48rem;
  margin: 0 auto;
  padding: 8px 10px;
  font-size: 0.875rem;
  line-height: 1.25rem;

  .inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    p {
      margin-right: 3rem;
    }
    h3 {
      font-weight: normal;
      flex-grow: 1;
    }
    .folder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;
