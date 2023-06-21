import React from 'react';

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
    <ul className='mobile-menu'>
      {menuItems.map((menuItem) => {
        return <li className='mobile-menu-item' key={menuItem.id}>{menuItem.title}</li>;
      })}
    </ul>
  );
};

export default MobileMenu;
