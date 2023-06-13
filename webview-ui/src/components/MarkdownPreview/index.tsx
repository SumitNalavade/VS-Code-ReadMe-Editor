import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import useAppStore from "../../stores/useAppStore";

const MarkdownPreview: React.FC = () => {
  const [showComponentView, setComponentView] = useState(true);

  const sectionStack = useAppStore((state) => state.sectionStack);
  const selectedComponent = useAppStore((state) => sectionStack.find((section) => section.id === state.selectedComponent?.id) ?? sectionStack[0]);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <p
          className="mx-2"
          style={{
            color: "#ef476f",
            userSelect: "none",
            cursor: "pointer",
          }}
          onClick={() => setComponentView(true)}
        >
          {showComponentView ? <strong>Component View</strong> : <p style={{ color: "gray" }}>Component View</p>}
        </p>

        <p
          className="mx-2"
          style={{
            color: "#ef476f",
            userSelect: "none",
            cursor: "pointer",
          }}
          onClick={() => setComponentView(false)}
        >
          {!showComponentView ? <strong>Full View</strong> : <p style={{ color: "gray" }}>Full View</p>}
        </p>
      </div>
      <div className={`preview overflow-auto text-break border rounded border-secondary p-4`} style={{ height: "80vh", width: "45vw" }}>
        <ReactMarkdown
          children={
            showComponentView
              ? selectedComponent.content
              : sectionStack.reduce((previousValue, currentValue) => {
                  // Check if the current content is already present in the accumulated value
                  if (!previousValue.includes(currentValue.content)) {
                    // Append the current content if it's not a duplicate
                    previousValue += currentValue.content;
                  }

                  return previousValue;
                }, sectionStack[0].content)
          }
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        />
      </div>
    </div>
  );
};

export default MarkdownPreview;
