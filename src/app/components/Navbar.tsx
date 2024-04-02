import Link from "next/link";
import React from "react";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li className="">
          <Link href="about">about</Link>
        </li>
        <li>
          <DropDown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
