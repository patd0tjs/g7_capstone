import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "./Sidenav";

const Layout = () => {
    return (
        <>
            <Sidenav user={null} />
            <div className="content">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
