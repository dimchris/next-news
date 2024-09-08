import React from "react";
import MenuItem from "./menu-item";

const MainHeader = () => {
  return (
    <ul>
      <MenuItem title="Home" link="/" />
      <MenuItem title="News" link="/news" />
    </ul>
  );
};

export default MainHeader;
