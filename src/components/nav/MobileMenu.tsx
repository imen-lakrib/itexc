import React from 'react';
import { Link } from 'react-scroll';

type MenuItem = {
  id: string;
  title: string;
  path: string;
};

type MobileMenuProps = {
  menuItems: MenuItem[];
};

const MobileMenu = ({ menuItems }: MobileMenuProps) => {
  return (
    <ul className="mobile-menu">
      {menuItems.map((menuItem) => (
        <li className="mobile-menu-item" key={menuItem.id}>
          <Link
            to={menuItem.path}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mobile-menu-link"
          >
            {menuItem.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;
