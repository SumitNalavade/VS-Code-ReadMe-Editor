import React from "react";

import useAppStore from "../../stores/useAppStore";
import ColorTheme from "../../utils/colorThemeEnum";
import { UploadIcon, DownloadIcon } from "../icons";

const Footer: React.FC = () => {
    const colorTheme = useAppStore((state) => state.colorTheme);
    const sendBase64ReadMeToExtension = useAppStore(
        (state) => state.sendBase64ReadMeToExtension
    );

    return (
        <nav className={`navbar ${ colorTheme === ColorTheme.LIGHT ? "bg-light" : "bg-dark" } d-flex justify-content-end`}>
            <div className="d-flex mx-5 justify-content-end">
                    <button
                        type="button"
                        className="btn text-white mx-2 d-flex align-items-center"
                        data-bs-toggle="modal"
                        data-bs-target="#uploadModal"
                        style={{ backgroundColor: "#06d6a0" }}
                    >
                        <UploadIcon />
                        Import
                    </button>
                    <button
                        type="button"
                        className="btn text-white mx-2 d-flex align-items-center"
                        onClick={sendBase64ReadMeToExtension}
                        style={{ backgroundColor: "#ef476f" }}
                    >
                        <DownloadIcon />
                        Save
                    </button>
                </div>
        </nav>
    );
};

export default Footer;