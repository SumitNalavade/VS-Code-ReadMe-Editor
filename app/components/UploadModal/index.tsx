import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { useDropzone } from "react-dropzone";

import { CloseIcon, UploadIcon } from "../icons";

import useAppStore from "../../stores/useAppStore";

import ColorTheme from "../../utils/colorThemeEnum";

const UploadModal: React.FC = () => {
  const importReadMe = useAppStore((state) => state.importReadMe);
  const colorTheme = useAppStore((state) => state.colorTheme);

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
        <div className={`modal-content ${ colorTheme === ColorTheme.DARK ? "bg-dark" : "" }`}>
          <div className="modal-header">
            <h5 className="modal-title" id="uploadModalLabel">
              Import ReadMe
            </h5>
            <div
          data-bs-dismiss="modal"
          aria-label="Close"
          className={`${colorTheme === ColorTheme.DARK ? "text-secondary" : ""}`}
          onClick={() => setUploadedFileContent("")}
        >
          <CloseIcon />
        </div>
          </div>
          <div className={`modal-body ${ colorTheme === ColorTheme.DARK ? "invertColor" : "" }`}>
            <div
              {...getRootProps()}
              className="d-flex flex-column justify-content-center align-items-center bg-seconadary"
              style={{ minHeight: "150px" }}
            >
              <input {...getInputProps()} type="file" />
              <div>
                {!uploadedFileContent ? (
                  <p className="text-secondary">
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
