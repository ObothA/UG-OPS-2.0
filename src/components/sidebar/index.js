import React, { useState } from "react";

import HR from "./hr";
import Procurement from "./procurement";
import Finance from "./finance";
import "./sidebar.css";

export default function Sidebar() {
  const [hrToggle, setHrToggle] = useState(false);

  return (
    <div className="setSideBarInline sidebgColor fixeSidebar">
      <div className="navContainer" onClick={setHrToggle(!hrToggle)}>
        <HR toggle={hrToggle} />
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
