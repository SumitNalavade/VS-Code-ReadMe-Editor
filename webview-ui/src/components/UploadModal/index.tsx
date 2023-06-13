import React, { useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useDropzone } from "react-dropzone";

import { CloseIcon, UploadIcon } from "../icons";

import useAppStore from "../../stores/useAppStore";

interface Props {
  uploadedReadMe: string
}

const UploadModal: React.FC<Props> = ({ uploadedReadMe }) => {
  const importReadMe = useAppStore((state) => state.importReadMe);

  const handleImportReadMe = () => {
    importReadMe(uploadedReadMe);
  }

  return (
    <dialog id="my_modal_2" className="modal w-11/12">
      <form method="dialog" className="modal-box w-full">
        <h3 className="font-bold text-lg">Import ReadMe</h3>
        <div className="py-4">
          <div className="flex flex-col justify-center items-center min-h-150">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {uploadedReadMe}
            </ReactMarkdown>
          </div>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    // <div className="modal fade" id="uploadModal" aria-labelledby="uploadModalLabel" aria-hidden="true">
    //   <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
    //     <div className={`modal-content`}>
    //       <div className="modal-header">
    //         <h5 className="modal-title" id="uploadModalLabel">
    //           Import ReadMe
    //         </h5>
    //         <div data-bs-dismiss="modal" aria-label="Close" onClick={() => setUploadedFileContent("")}>
    //           <CloseIcon />
    //         </div>
    //       </div>
    //       <div className={`modal-body`}>
    //         <div {...getRootProps()} className="d-flex flex-column justify-content-center align-items-center bg-seconadary" style={{ minHeight: "150px" }}>
    //           <input {...getInputProps()} type="file" />
    //           <div>
    //             {!uploadedFileContent ? (
    //               <p className="text-secondary">Click to select ReadMe</p>
    //             ) : (
    //               <div className="preview px-2">
    //                 <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
    //                   {uploadedFileContent}
    //                 </ReactMarkdown>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn text-white d-flex align-items-center" data-bs-dismiss="modal" onClick={handleImportReadMe} style={{ backgroundColor: "#06d6a0" }}>
    //           <UploadIcon />
    //           Import
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default UploadModal;
