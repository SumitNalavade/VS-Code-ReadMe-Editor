import React from "react";
import Editor from "@monaco-editor/react";

import useAppStore from "../../stores/useAppStore";
import useHover from "../../hooks/useHover";

const MarkdownEditor: React.FC = () => {
  const { isHovering, handleMouseEnter, handleMouseLeave } = useHover();
  
  const sectionStack = useAppStore((state) => state.sectionStack);
  const setSectionStack = useAppStore((state) => state.setSectionStack);
  const selectedComponent = useAppStore((state) => state.selectedComponent ?? sectionStack[0]);

  const handleChange = (newValue: string) => {
    sectionStack.forEach((component) => component.id === selectedComponent.id ? component.content = newValue : "");
    setSectionStack(sectionStack);
  };

  return (
    <>
    <div className="d-flex justify-content-between">
            <p className="mx-2" style={{ color: "#ef476f", userSelect: "none" }}>
              <strong>Editor</strong>
            </p>
            <span onClick={() => handleChange("")}>
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
      <Editor
        theme="vs-dark"
        width="100%"
        height="80vh"
        defaultLanguage="Markdown"
        defaultValue={selectedComponent.content}
        value={selectedComponent.content}
        onChange={(value) => handleChange(value as string)}
        options={{
          minimap: {
            enabled: false,
          },
        }}
      />
    </>
  );
};

export default MarkdownEditor;
