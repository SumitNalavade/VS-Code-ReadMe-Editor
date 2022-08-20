import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import { UploadIcon } from "../icons";

import useAppStore from "../../stores/useAppStore";

const UploadModal: React.FC = () => {
  const importReadMe = useAppStore((state) => state.importReadMe);

  const [uploadedFileContent, setUploadedFileContent] = useState<string>();

  const onDrop = useCallback((file: File[]) => {
    const uploadedFile = file[0];

    try {
      extractFileContents(uploadedFile);
    } catch {
      vscode.postMessage({ command: "error", content: "Invalid File! 😳" });
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "text/plain": [".md"] },
  }); //React-dropzone props

  const extractFileContents = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target!.result as string;
      setUploadedFileContent(text);
    };
    reader.readAsText(file);
  };

  const handleImportReadMe = () => {
    if (!uploadedFileContent) {
      return;
    }

    importReadMe(uploadedFileContent);
    setUploadedFileContent(undefined);
  };

  return (
    <div
      className="modal fade"
      id="uploadModal"
      aria-labelledby="uploadModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="uploadModalLabel">
              Import ReadMe
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => setUploadedFileContent("")}
            ></button>
          </div>
          <div className="modal-body">
            <div
              {...getRootProps()}
              className="d-flex flex-column justify-content-center align-items-center bg-muted"
              style={{ minHeight: "150px" }}
            >
              <input {...getInputProps()} type="file" />
              <div>
                {!uploadedFileContent ? (
                  <p className="text-muted">
                    Drop ReadMe here or click to select
                  </p>
                ) : (
                  <div className="preview px-2">
                    <ReactMarkdown>{uploadedFileContent}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn text-white d-flex align-items-center"
              data-bs-dismiss="modal"
              onClick={handleImportReadMe}
              style={{ backgroundColor: "#06d6a0" }}
            >
              <UploadIcon />
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
