import React from "react";
import ReactMarkdown from "react-markdown";

import useAppStore from "../../stores/useAppStore";
import ColorTheme from "../../utils/colorThemeEnum";
import { CloseIcon } from "../icons";

const ComponentDescriptionModal: React.FC = () => {
  const selectedComponent = useAppStore((state) => state.selectedComponent);
  const addEditorContent = useAppStore((state) => state.addEditorContent);
  const colorTheme = useAppStore((state) => state.colorTheme);

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
        <div className={`modal-content ${ colorTheme === ColorTheme.DARK ? "bg-dark" : "" }`}>
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`componentDescriptionModalLabel`}
              style={{ color: "#ef476f" }}
            >
              {selectedComponent?.name}
            </h5>
            <div
              data-bs-dismiss="modal"
              aria-label="Close"
              className={`${ colorTheme === ColorTheme.DARK ? "text-secondary" : "" }`}
              >
              <CloseIcon />
            </div>
          </div>
          <div className={`modal-body ${ colorTheme === ColorTheme.DARK ? "invertColor" : "" }`}>
            <ReactMarkdown>
              {selectedComponent?.description as string}
            </ReactMarkdown>
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary border"
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
