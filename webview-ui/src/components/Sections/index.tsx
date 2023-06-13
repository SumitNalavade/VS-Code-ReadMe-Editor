import React from "react";
import useAppStore from "../../stores/useAppStore";
import { TrashIcon } from "../icons";
import IComponent from "../../utils/componentInterface";

const Sections: React.FC = () => {
  const sectionStack = useAppStore((state) => state.sectionStack);
  const setSectionStack = useAppStore((state) => state.setSectionStack);
  const selectedComponent = useAppStore((state) => state.selectedComponent);
  const setSelectedComponent = useAppStore((state) => state.setSelectedComponent);

  const handleDelete = (evt: any, section: IComponent) => {
    evt.stopPropagation();

    setSelectedComponent(sectionStack[sectionStack.indexOf(section) - 1]);
    setSectionStack(sectionStack.filter((elm) => elm !== section));
  };

  return (
    <div className="d-flex flex-column">
      {sectionStack.map((section) => (
        <button className={`btn shadow-sm my-2 d-flex justify-content-between align-items-center fs-6 border ${ section.id === selectedComponent?.id ? "border-danger" : "" }`} style={{ color: "#ef476f" }} onClick={() => setSelectedComponent(section)}>
          <p>{section.name}</p>
          <div className={`${section.name === "Custom" ? "d-none" : ""}`} onClick={(evt) => handleDelete(evt, section)}>
            <TrashIcon />
          </div>
        </button>
      ))}
      <button className="btn shadow-sm my-2 fs-6 text-start" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDrawer" style={{ color: "#ef476f" }} >
        <p>Add Section</p>
      </button>
    </div>
  );
};

export default Sections;
