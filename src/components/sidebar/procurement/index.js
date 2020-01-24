import React from "react";

import { GiTakeMyMoney } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";
import { IconContext } from "react-icons";

export default function Procurement() {
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
        Procurement
        <IconContext.Provider
          value={{
            color: "white",
            size: "2em",
            className: "global-class-name"
          }}
        >
          <span className="userIcon">
            <GiTakeMyMoney />
          </span>
        </IconContext.Provider>
      </p>
    </div>
  );
}
