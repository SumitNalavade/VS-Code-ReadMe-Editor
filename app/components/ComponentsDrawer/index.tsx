import React from "react";

import useAppStore from "../../stores/useAppStore";

import ComponentsDrawerComponent from "./componentsDrawerComponent";

const ComponentsDrawer: React.FC = ({ }) => {

    const componentDrawerStatus = useAppStore((state) => state.componentDrawerStatus);
    const toggleComponentDrawerStatus = useAppStore((state) => state.toggleComponentDrawerStatus);

    const components = useAppStore((state) => state.components);

    return (
        <div className={`offcanvas offcanvas-start ${ componentDrawerStatus }`}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Components</h5>
                <button type="button" className="btn-close" onClick={toggleComponentDrawerStatus} ></button>
            </div>
            <div className="offcanvas-body">
                { components.map((component) => {
                    return (
                       <ComponentsDrawerComponent component={component} />
                    )
                }) }
            </div>
      </div>
    );
};

export default ComponentsDrawer;