import React from "react";

import allComponents from "../../components";
import templates from "../../templates";
import useAppStore from "../../stores/useAppStore";

import ComponentsDrawerComponent from "./componentsDrawerComponent";

const ComponentsDrawer: React.FC = ({ }) => {

    const componentDrawerStatus = useAppStore((state) => state.componentDrawerStatus);
    const setComponentDrawerStatus = useAppStore((state) => state.setComponentDrawerStatus);
    
    const renderComponents = componentDrawerStatus === "all" ? allComponents : componentDrawerStatus === "popular" ? allComponents.filter((component) => component.popular) : templates

    return (
        <div className="offcanvas offcanvas-start" id="offcanvasExample" >
            <div className="offcanvas-header flex justify-content-between">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item mx-2 pointer" onClick={() => setComponentDrawerStatus("popular")} >
                        <a className={`nav-link ${componentDrawerStatus === "popular" ? "active" : ""}`} >Popular</a>
                    </li>
                    <li className="nav-item mx-2 pointer" onClick={() => setComponentDrawerStatus("all")} >
                        <a className={`nav-link ${componentDrawerStatus === "all" ? "active" : ""}`}>All</a>
                    </li>
                    <li className="nav-item mx-2 pointer" onClick={() => setComponentDrawerStatus("templates")} >
                        <a className={`nav-link ${componentDrawerStatus === "templates" ? "active" : ""}`} >Templates</a>
                    </li>
                </ul>
                <button type="button" className="btn-close nav-link" data-bs-dismiss="offcanvas"></button>
            </div>
            <div className="offcanvas-body">
                { renderComponents.map((component) => {
                    return (
                       <ComponentsDrawerComponent component={component} />
                    )
                }) }
            </div>
      </div>
    );
};

export default ComponentsDrawer;