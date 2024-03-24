import React from "react";
import Navbar from "./Navbar";
import MainHeaderLogo from "./MainHeaderLogo";
import MainDrawer from "./MainDrawer";

const LINKS = [
  {
    text: "About us",
    url: "about-us",
    children: [{ text: "a", url: "a" }],
  },
  {
    text: "Product 1",
    url: "about-us",
    children: [{ text: "a", url: "a" }],
  },
  {
    text: "Product 2",
    url: "about-us",
    children: [{ text: "a", url: "a" }],
  },
  {
    text: "Comments",
    url: "about-us",
    children: [{ text: "a", url: "a" }],
  },
  {
    text: "Media",
    url: "about-us",
  },
  {
    text: "Contact",
    url: "about-us",
  },
];

const MainHeader = () => {
  return (
    <header
      className="flex gap-4 items-center p-2
     shadow-md justify-between"
    >
      <MainHeaderLogo />
      <MainDrawer links={LINKS} className="md:hidden" />
      {/* <Navbar /> */}
      
    </header>
  );
};

export default MainHeader;
