import React from "react";

import useAppStore from "../../stores/useAppStore";

import { StackIcon, UploadIcon, DownloadIcon } from "../icons";

const Navbar: React.FC = () => {
  const sendBase64ReadMeToExtension = useAppStore(
    (state) => state.sendBase64ReadMeToExtension
  );

  return (
    <nav className="navbar bg-light">
      <div className="container-fluid d-flex justify-content-between">
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDrawer"
          type="button"
          className="btn btn-link"
        >
          <StackIcon />
        </button>
        <div className="d-flex justify-content-around">
          <button
            type="button"
            className="btn text-white d-flex align-items-center mx-2"
            data-bs-toggle="modal"
            data-bs-target="#uploadModal"
            style={{ backgroundColor: "#06d6a0" }}
          >
            <UploadIcon />
            Import
          </button>
          <button
            type="button"
            className="btn text-white d-flex align-items-center mx-2"
            onClick={sendBase64ReadMeToExtension}
            style={{ backgroundColor: "#ef476f" }}
          >
            <DownloadIcon />
            Save
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
