import React from "react";

import { IoIosPeople } from "react-icons/io";
import { IconContext } from "react-icons";

export default function HR() {
  return (
    <div>
      <p>
        Human Resource
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
            className: "global-class-name"
          }}
        >
          <span className="userIcon">
            <IoIosPeople />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}
