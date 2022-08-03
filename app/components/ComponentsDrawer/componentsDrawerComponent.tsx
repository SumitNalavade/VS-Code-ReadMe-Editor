import React from "react";
import ReactMarkdown from "react-markdown";

import useAppStore from "../../stores/useAppStore";

import IComponent from "../../utils/componentInterface";

interface Props {
    component: IComponent
}

const ComponentsDrawerComponent: React.FC<Props> = ({ component }) => {
    const editorContent = useAppStore((state) => state.markdownContent);
    const setEditorContent = useAppStore((state) => state.setEditorContent);

    const handleAddContent = () => {
        const newContent = `${editorContent} ${component.content}`;

        setEditorContent(newContent);
    };

    return (
        <div className="card my-2">
            <div className="card-body" onClick={handleAddContent} >
                {component.name}
            </div>
        </div>
    );  
};

export default ComponentsDrawerComponent;
