import React from "react";
import ReactMarkdown from "react-markdown";

import useAppStore from "../../stores/useAppStore";

const ComponentDescriptionModal: React.FC = () => {
  const selectedComponent = useAppStore((state) => state.selectedComponent);
  const addEditorContent = useAppStore((state) => state.addEditorContent);

  const handleAddEditorContent = () => {
    addEditorContent(selectedComponent?.content);
  };

  return (
    <div
      className="modal fade"
      id={`componentDescriptionModal`}
      aria-labelledby={`componentDescriptionModal`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`componentDescriptionModalLabel`}
              style={{ color: "#ef476f" }}
            >
              {selectedComponent?.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ReactMarkdown>
              {selectedComponent?.description as string}
            </ReactMarkdown>
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary"
              style={{ backgroundColor: "#ef476f" }}
              onClick={handleAddEditorContent}
            >
              Add To ReadMe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentDescriptionModal;
