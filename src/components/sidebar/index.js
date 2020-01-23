import React from "react";

import HR from "./hr";
import Procurement from "./procurement";
import Finance from "./finance";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="setSideBarInline sidebgColor fixeSidebar">
      <div className="navContainer">
        <HR />
      </div>
      <div className="navContainer">
        <Procurement />
      </div>
      <div className="navContainer">
        <Finance />
      </div>
    </div>
  );
}
