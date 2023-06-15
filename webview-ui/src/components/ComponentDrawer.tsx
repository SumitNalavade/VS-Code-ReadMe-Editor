import React, { useState } from "react";

import { AiOutlineInfoCircle } from "react-icons/ai";
import IComponent from "../utils/componentInterface";
import components from "../components";

interface ComponentDrawerComponentProps {
  component: IComponent;
}
const ComponentDrawerComponent: React.FC<ComponentDrawerComponentProps> = ({ component }) => {
  return (
    <button className="border p-4 text-md flex justify-between ">
      {component.name} {component.description ? <AiOutlineInfoCircle className="text-primary text-lg" /> : ""}
    </button>
  );
};

const ComponentDrawer: React.FC = () => {
  const [componentDrawerStatus, setComponentDrawerStatus] = useState<
    "all" | "popular" | "templates"
  >("popular");

  const renderComponents =
    componentDrawerStatus === "all"
      ? components
      : componentDrawerStatus === "popular"
      ? components.filter((component) => component.popular)
      : components.filter((component) => component.template);

  return (
    <div className="drawer">
      <input id="component-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{/* Page content here */}</div>
      <div className="drawer-side">
        <label htmlFor="component-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-white text-base-content">
          {renderComponents.map((component, index) => (
            <li className="my-2">
              <ComponentDrawerComponent component={component} key={index} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ComponentDrawer;
