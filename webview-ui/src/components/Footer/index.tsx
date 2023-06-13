import React from "react";

import useAppStore from "../../stores/useAppStore";
import { UploadIcon, DownloadIcon } from "../icons";

const Footer: React.FC = () => {
  const createReadMe = useAppStore((state) => state.createReadMe);

  async function downloadBase64File() {
    const linkSource = await createReadMe();
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource as string;
    downloadLink.download = "README.md";
    downloadLink.click();
  }

  return (
    <nav className={`navbar d-flex justify-content-end`}>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn text-white mx-2 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#uploadModal" style={{ backgroundColor: "#06d6a0" }}>
          <UploadIcon />
          Import
        </button>
        <button type="button" className="btn text-white mx-2 d-flex align-items-center" onClick={downloadBase64File} style={{ backgroundColor: "#ef476f" }}>
          <DownloadIcon />
          Save
        </button>
      </div>
    </nav>
  );
};

export default Footer;
