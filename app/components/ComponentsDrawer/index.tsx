import React from "react";

import allComponents from "../../components";
import templates from "../../templates";
import useAppStore from "../../stores/useAppStore";

import ComponentsDrawerComponent from "./componentsDrawerComponent";
import ColorTheme from "../../utils/colorThemeEnum";
import { CloseIcon } from "../icons";

const ComponentsDrawer: React.FC = ({}) => {
  const componentDrawerStatus = useAppStore(
    (state) => state.componentDrawerStatus
  );
  const setComponentDrawerStatus = useAppStore(
    (state) => state.setComponentDrawerStatus
  );
  const colorTheme = useAppStore((state) => state.colorTheme);

  const renderComponents =
    componentDrawerStatus === "all"
      ? allComponents
      : componentDrawerStatus === "popular"
      ? allComponents.filter((component) => component.popular)
      : templates;

  return (
    <div
      className={`offcanvas offcanvas-start ${
        colorTheme === ColorTheme.DARK ? "bg-dark" : ""
      }`}
      id="offcanvasDrawer"
    >
      <div className="offcanvas-header flex justify-content-between">
        <ul className="nav nav-pills nav-fill">
          <li
            className="nav-item mx-2 pointer"
            onClick={() => setComponentDrawerStatus("popular")}
          >
            <a
              className={`nav-link ${
                componentDrawerStatus === "popular" ? "navLinkSelected" : ""
              }`}
            >
              Popular
            </a>
          </li>
          <li
            className="nav-item mx-2 pointer"
            onClick={() => setComponentDrawerStatus("all")}
          >
            <a
              className={`nav-link ${
                componentDrawerStatus === "all" ? "navLinkSelected" : ""
              }`}
            >
              All
            </a>
          </li>
          <li
            className="nav-item mx-2 pointer"
            onClick={() => setComponentDrawerStatus("templates")}
          >
            <a
              className={`nav-link ${
                componentDrawerStatus === "templates" ? "navLinkSelected" : ""
              }`}
            >
              Templates
            </a>
          </li>
        </ul>
        <div
          data-bs-dismiss="offcanvas"
          aria-label="Close"
          className={`${colorTheme === ColorTheme.DARK ? "text-secondary" : ""}`}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="offcanvas-body">
        {renderComponents.map((component, index) => {
          return (
            <ComponentsDrawerComponent key={index} component={component} />
          );
        })}
      </div>
    </div>
  );
};

export default ComponentsDrawer;
