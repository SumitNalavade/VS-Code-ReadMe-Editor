import React, { useEffect } from "react";

import useAppStore from "./stores/useAppStore";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UploadModal from "./components/UploadModal";
import ComponentDescriptionModal from "./components/ComponentsDrawer/componentDescriptionModal";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import useHover from "./hooks/useHover";

import ColorTheme from "./utils/colorThemeEnum";

const App = () => {
  const clearEditorContent = useAppStore((state) => state.clearEditorContent);
  const colorTheme = useAppStore((state) => state.colorTheme);
  const setHistory = useAppStore((state) => state.setHistory);
  
  window.addEventListener('message', event => {
    const history = event.data; // The JSON data our extension sent
    console.log(history);
    setHistory(history);
  });

  const { isHovering, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <div className={`container-fluid px-0 ${ colorTheme === ColorTheme.LIGHT ? "" : "bg-dark" }`}>
      <Navbar />

      <UploadModal />
      <ComponentDescriptionModal />

      <ComponentsDrawer />

      <div className="mx-4 d-flex justify-content-around pt-4">
        <div>
          <div className="d-flex justify-content-between">
            <p
              className="mx-2"
              style={{ color: "#ef476f", userSelect: "none" }}
            >
              <strong>Editor</strong>
            </p>
            <span onClick={() => clearEditorContent()}>
              <p
                style={{
                  color: isHovering ? "#942b44" : "#ef476f",
                  cursor: "pointer",
                  transition: "color 0.1s ease-in-out",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Clear
              </p>
            </span>
          </div>
          <MarkdownEditor />
        </div>

        <div>
          <p
            className="mx-2"
            style={{
              color: "#ef476f",
              userSelect: "none",
            }}
          >
            <strong>Preview</strong>
          </p>

          <MarkdownPreview />
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default App;
