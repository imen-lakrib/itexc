import React, { useState } from "react";
import { Link, animateScroll } from "react-scroll";
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
  { id: "01", title: "Home", path: "home-section" },
  { id: "02", title: "About us", path: "about-section" },
  { id: "03", title: "Our Services", path: "services-section" },
  { id: "04", title: "Contact us", path: "contact-section" },
];

const NavBar = () => {
  const [isOpenedMobileMenu, setIsOpenedMobileMenu] = useState<boolean>(false);

  const openMobileMenu = () => {
    setIsOpenedMobileMenu(!isOpenedMobileMenu);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <div className="nav-container">
      <div className="logo" onClick={scrollToTop}>
        <img src="/logo.png" alt="logo" />
      </div>

      <ul className="menu">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link
              activeClass="active"
              to={menuItem.path}
              spy={true}
              smooth={true}
              offset={-70} // Adjust the offset value as needed
              duration={500}
            >
              {menuItem.title}
            </Link>
          </li>
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
