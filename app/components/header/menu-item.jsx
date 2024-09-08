import Link from "next/link";
import React from "react";

const MenuItem = ({ title, link }) => {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};

export default MenuItem;
