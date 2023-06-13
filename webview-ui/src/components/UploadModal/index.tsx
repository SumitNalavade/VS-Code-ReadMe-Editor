import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { BsUpload } from "react-icons/bs";
import useAppStore from "../../stores/useAppStore";

interface Props {
  uploadedReadMe: string;
}

const UploadModal: React.FC<Props> = ({ uploadedReadMe }) => {
  const importReadMe = useAppStore((state) => state.importReadMe);


  const handleImportReadMe = () => {
    importReadMe(uploadedReadMe);
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <form method="dialog" className="modal-box relative p-0 w-11/12 max-w-4xl" onSubmit={handleImportReadMe}>
        <div className="modal-dialog-scrollable p-4 flex justify-center">
          <ReactMarkdown
            className="prose pt-4"
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}>
            {uploadedReadMe}
          </ReactMarkdown>
        </div>
        <div className="modal-title sticky bottom-0 text-end py-2 px-6 bg-white">
          <button className="btn btn-secondary text-white">
            <div className="flex justify-evenly items-center">
              <BsUpload /> <p className="ml-2">Import</p>
            </div>
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UploadModal;
