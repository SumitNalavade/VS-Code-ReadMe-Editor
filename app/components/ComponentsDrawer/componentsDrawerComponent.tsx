import React from "react";

import useAppStore from "../../stores/useAppStore";

import { InfoIcon } from "../icons";
import IComponent from "../../utils/componentInterface";

interface Props {
  component: IComponent;
}

const ComponentsDrawerComponent: React.FC<Props> = ({ component }) => {
  const addEditorContent = useAppStore((state) => state.addEditorContent);
  const setSelectedComponent = useAppStore(
    (state) => state.setSelectedComponent
  );

  return (
    <div className="card my-2">
      <div
        className="card-body d-flex justify-content-between"
        onClick={() => addEditorContent(component.content)}
      >
        <p>{component.name}</p>
        {component.description ? (
          <p
            onClick={(evt) => {
              evt.stopPropagation();
              setSelectedComponent(component);
            }}
            data-bs-toggle="modal"
            data-bs-target={`#componentDescriptionModal`}
          >
            <InfoIcon />
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ComponentsDrawerComponent;
