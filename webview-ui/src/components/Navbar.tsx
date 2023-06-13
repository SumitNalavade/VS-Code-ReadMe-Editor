import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar: React.FC = () => {
  return (
    <div>
      <a className="btn btn-ghost normal-case text-sm text-primary">
        <AiOutlineMenu />
      </a>
    </div>
  );
};

export default Navbar;