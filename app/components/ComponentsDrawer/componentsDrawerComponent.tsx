import React from "react";

import useAppStore from "../../stores/useAppStore";

import IComponent from "../../utils/componentInterface";

interface Props {
    component: IComponent
}

const ComponentsDrawerComponent: React.FC<Props> = ({ component }) => {    

    const addEditorContent = useAppStore((state) => state.addEditorContent);

    console.log("Render")

    return (
        <div className="card my-2">
            <div className="card-body" onClick={() => addEditorContent(component.content)} >
                {component.name}
            </div>
        </div>
    );  
};

export default ComponentsDrawerComponent;
