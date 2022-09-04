import React, { useState } from "react";

import useAppStore from "./stores/useAppStore";
import useColorTheme from "./hooks/useColorTheme";

import Navbar from "./components/Navbar";
import UploadModal from "./components/UploadModal";
import ComponentDescriptionModal from "./components/ComponentsDrawer/componentDescriptionModal";
import ComponentsDrawer from "./components/ComponentsDrawer";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";
import useHover from "./hooks/useHover";

import ColorTheme from "./utils/colorThemeEnum";

const App = () => {
  const clearEditorContent = useAppStore((state) => state.clearEditorContent);
  const { isHovering, handleMouseEnter, handleMouseLeave } = useHover();
  const { colorTheme, toggleColorTheme } = useColorTheme();
  
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
            <p onClick={toggleColorTheme}>Toggle Color Theme</p>
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

          <MarkdownPreview colorTheme={colorTheme} />
        </div>
      </div>
    </div>
  );
};

export default App;
