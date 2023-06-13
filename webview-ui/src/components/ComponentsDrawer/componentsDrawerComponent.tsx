import React from "react";

import useAppStore from "../../stores/useAppStore";

import { InfoIcon } from "../icons";
import IComponent from "../../utils/componentInterface";

interface Props {
  component: IComponent;
}

const ComponentsDrawerComponent: React.FC<Props> = ({ component }) => {
  return (
    <div className={`card my-2`}>
      <div className="card-body d-flex justify-content-between">
        <p>{component.name}</p>
        {component.description ? (
          <p
            onClick={(evt) => {
              evt.stopPropagation();
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
