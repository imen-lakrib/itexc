import React, { useState } from "react";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import "./navbar.css";
import MobileMenu from "./MobileMenu";

type MenuItem = {
  id: string;
  title: string;
  path: string;
};

const menuItems: MenuItem[] = [
  { id: "01", title: "Home", path: "/" },
  { id: "02", title: "About us", path: "/" },
  { id: "03", title: "Our Services", path: "/" },
  { id: "04", title: "Contact us", path: "/" },
];

const NavBar = () => {
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState<boolean>(false);

  const openMobileMenu = () => {
    setIsOpenedMobileMenu(!isOpenedMobileMenu);
  };

  return (
    <div className="nav-container">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>

      <ul className="menu">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>{menuItem.title}</li>
        ))}
      </ul>

      <div className="contact-icon">
        <PhoneInTalkOutlinedIcon sx={{ color: "#3C88C3" }} />
        <div className="contact-info">
          <span className="sup-title"> Service disponible</span>
          <br />
          0453 628 125
        </div>
      </div>

      <div className="mobile-icon-menu">
        <MenuOutlinedIcon sx={{ color: "#3C88C3" }} onClick={openMobileMenu} />
      </div>

      {isOpenedMobileMenu && <MobileMenu menuItems={menuItems} />}
    </div>
  );
};

export default NavBar;
