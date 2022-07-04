import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ titleItem, linkItem }) {
  return (
    <li>
      <Link
        to={linkItem}
        className="block py-2 pr-4 pl-3 font-light bg-primary-dark  target:bg-primary-light  md:p-5 "
      >
        {titleItem}
      </Link>
    </li>
  );
}
