import React from "react";

import { FaFileInvoiceDollar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Finance() {
  return (
    <div>
      <p>
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
            className: "global-class-name"
          }}
        >
          <span className="userIcon">
            <IoIosArrowDown />
          </span>
        </IconContext.Provider>
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
