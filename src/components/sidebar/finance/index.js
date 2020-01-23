import React from "react";

import { FaFileInvoiceDollar } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Finance() {
  return (
    <div>
      <p>
        Finance
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
            className: "global-class-name"
          }}
        >
          <span className="userIcon">
            <FaFileInvoiceDollar />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}
