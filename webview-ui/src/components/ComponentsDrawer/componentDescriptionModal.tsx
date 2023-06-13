import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import useAppStore from "../../stores/useAppStore";
import { CloseIcon } from "../icons";

const ComponentDescriptionModal: React.FC = () => {
  return (
    <div
      className="modal fade"
      id={`componentDescriptionModal`}
      aria-labelledby={`componentDescriptionModal`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className={`modal-content`}>
          <div className="modal-header">
            <h5
              className="modal-title"
              id={`componentDescriptionModalLabel`}
              style={{ color: "#ef476f" }}
            >
              
            </h5>
            <div
              data-bs-dismiss="modal"
              aria-label="Close"
              >
              <CloseIcon />
            </div>
          </div>
          <div className={`modal-body`}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              ""
            </ReactMarkdown>
          </div>
          <div className="modal-footer">
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-primary border"
              style={{ backgroundColor: "#ef476f" }}
              
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
