import React from "react";

import useAppStore from "../../stores/useAppStore";

import ComponentsDrawerComponent from "./componentsDrawerComponent";

const ComponentsDrawer: React.FC = ({ }) => {

    const componentDrawerViewStatus = useAppStore((state) => state.componentDrawerViewStatus);
    const toggleComponentDrawerViewStatus = useAppStore((state) => state.toggleComponentDrawerViewStatus);

    const componentDrawerStatus = useAppStore((state) => state.componentDrawerStatus);
    const setComponentDrawerStatus = useAppStore((state) => state.setComponentDrawerStatus);
    
    const allComponents = useAppStore((state) => state.components);

    return (
        <div className={`offcanvas offcanvas-start ${ componentDrawerViewStatus }`}>
            <div className="offcanvas-header flex justify-content-between">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item mx-2" onClick={() => setComponentDrawerStatus("added")}>
                        <a className={`nav-link ${componentDrawerStatus === "added" ? "active" : ""}`} >Added</a>
                    </li>
                    <li className="nav-item mx-2" onClick={() => setComponentDrawerStatus("popular")} >
                        <a className={`nav-link ${componentDrawerStatus === "popular" ? "active" : ""}`} >Popular</a>
                    </li>
                    <li className="nav-item mx-2" onClick={() => setComponentDrawerStatus("all")} >
                        <a className={`nav-link ${componentDrawerStatus === "all" ? "active" : ""}`}>All</a>
                    </li>
                </ul>
                <button type="button" className="btn-close nav-link" onClick={toggleComponentDrawerViewStatus}></button>
            </div>
            <div className="offcanvas-body">
                { allComponents.map((component) => {
                    return (
                       <ComponentsDrawerComponent component={component} />
                    )
                }) }
            </div>
      </div>
    );
};

export default ComponentsDrawer;