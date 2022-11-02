import React from "react";

import useAppStore from "../../stores/useAppStore";
import ColorTheme from "../../utils/colorThemeEnum";

import { HistoryIcon, StackIcon, ToggleColorThemeIcon } from "../icons";

const Navbar: React.FC = () => {
  const colorTheme = useAppStore((state) => state.colorTheme);
  const toggleColorTheme = useAppStore((state) => state.toggleColorTheme);

  return (
    <nav className={`navbar ${ colorTheme === ColorTheme.LIGHT ? "bg-light" : "bg-dark" }`}>
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
          <div onClick={toggleColorTheme} className="d-flex align-items-center justify-content-center mx-2" style={{ cursor: "pointer" }}>
            <ToggleColorThemeIcon />
          </div>
          <div className="d-flex align-items-center justify-content-center mx-2" style={{ cursor: "pointer" }}>
              <HistoryIcon />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
