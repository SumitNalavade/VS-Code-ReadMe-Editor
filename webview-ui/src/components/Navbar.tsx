import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <label htmlFor="component-drawer">
      <a className="btn btn-ghost normal-case text-sm text-primary">
        <AiOutlineMenu />
      </a>
    </label>
  );
};

export default Navbar;