import React from "react";
import "./SidebarOption.css";

const sidebarMenu = [
  {
    option: "Home",
  },
  {
    option: "Search",
  },
  {
    option: "Your Library",
  },
];

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
