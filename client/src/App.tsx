import React from "react";
import TextEditor from "./components/TextEditor";
import Header from "./components/Header";
import NewDocSection from "./components/NewDocSection";
import DocsHistorySection from "./components/DocsHistorySection";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <NewDocSection />
      <DocsHistorySection />
      {/* <Router>
        <Routes>
          <Route
            path="/"
            element={<Navigate replace to={`/documents/${uuidV4()}`} />}
          />
          <Route path="/documents/:id" element={<TextEditor />} />
        </Routes>
      </Router> */}
    </>
  );
};

export default App;
