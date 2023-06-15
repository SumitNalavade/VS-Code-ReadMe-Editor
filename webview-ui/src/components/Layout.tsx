import React from "react";
import Navbar from "./Navbar";
import ComponentDrawer from "./ComponentDrawer";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-white p-2">
      <Navbar />
      <ComponentDrawer />

      <main className="w-full flex-1 p-6">{children}</main>
    </div>
  );
};

export default Layout;
