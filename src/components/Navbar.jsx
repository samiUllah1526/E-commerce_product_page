import React from "react";
import iconMenu from "./../images/icon-menu.svg";
import iconCart from "./../images/icon-cart.svg";
import avatar from "./../images/image-avatar.png";

export function Navbar() {
  return (
    <nav className="container w-11/12 flex justify-between py-7">
      <ul className="flex">
        <li className="mr-4">
          <img src={iconMenu} alt="menu bar" />
        </li>
        <li>
          {" "}
          <h1>Sneakers</h1>{" "}
        </li>
      </ul>
      <ul className="flex">
        <li>
          <img src={iconCart} alt="cart icon" />
        </li>
        <li className="rounded-full h-6 w-6 ml-5">
          <img src={avatar} alt="avatar" className="object-cover" />
        </li>
      </ul>
    </nav>
  );
}
