import React from "react";
import useAppStore from "../../stores/useAppStore";

import components from "../../components";

const ComponentsDrawer: React.FC = ({ }) => {

    const componentDrawerStatus = useAppStore((state) => state.componentDrawerStatus);
    const toggleComponentDrawerStatus = useAppStore((state) => state.toggleComponentDrawerStatus);
    
    return (
        <div className={`offcanvas offcanvas-start ${ componentDrawerStatus }`}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title">Offcanvas Left</h5>
                <button type="button" className="btn-close" onClick={toggleComponentDrawerStatus} ></button>
            </div>
            <div className="offcanvas-body">
                {components[0].content}
            </div>
      </div>
    );
};

export default ComponentsDrawer;