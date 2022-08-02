import React from "react";

import Navbar from "./Navbar";

interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="container-fluid px-0" >
            <Navbar />
            { children }
        </div>
    );
};

export default Layout;