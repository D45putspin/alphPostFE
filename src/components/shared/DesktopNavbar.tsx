"use client";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowButton from "../pages/blog-details/ArrowButton";

export const navbarData = [



  {
    id: "homeOne",
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "menu2",
    menuTitle: "App",
    disabled: true,
    path: "#",
    menuItems: [
      {
        id: "all-blogs",
        title: "Blogs",
        menuItemPath: "/blogs",
      },
      {
        id: "Blogs-details",
        title: "Blog Details",
        menuItemPath: "/blog-details",
      },
    ],
  },
  {
    id: "contact-page",
    menuTitle: "Contact",
    path: "/contact",
  },
];

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className="desktop-navbar-container">
      <div>
        <Link href={`/`} className="logo-main">
          ALPH<span>POST</span>
        </Link>
      </div>
      <ul className="desktop-menu-items" id="primary">
        {navbarData.map(({ id, menuTitle, path, menuItems, disabled }) => {
          let isActive = menuItems?.some(
            (path) => pathName == path.menuItemPath
          );
          return menuItems ? (
            <li
              key={`${id}`}
              className={`position-relative menu-item-with-dropdown ${disabled ? 'menu-item-disabled' : ''}`}
            >
              <p
                className={`d-flex gap-1 align-items-center justify-content-between navbar-hover-text ${isActive && !disabled && "text-secondary"
                  }`}
              >
                <span
                  className={`textL font-medium  ${isActive && !disabled ? "text-secondary" : "menu-item-text-white"
                    }`}
                >
                  {menuTitle}
                </span>
                {!disabled ? <IconChevronDown stroke="3" className={`menu-arrow-icon`} /> : <></>}
              </p>

              <ul className="list-unstyled main-menu-dropdown">
                {menuItems.map(({ id, title, menuItemPath }) => (
                  <li key={id} className={`${disabled ? 'menu-item-disabled' : ''}`}>
                    <Link
                      href={`${menuItemPath}`}
                      className={`textL desktop-menu-item desktop-menu-dropdown-item menu-item-text-white  ${pathName === menuItemPath && !disabled && "menu-active"
                        }`}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={id} className={`menu-item ${disabled ? 'menu-item-disabled' : ''}`}>
              <Link
                href={`${path}`}
                className={`textL font-medium navbar-hover-text  ${pathName === path && !disabled ? "text-secondary" : "menu-item-text-white"
                  }`}
              >
                {menuTitle}
              </Link>
            </li>
          );
        })}
      </ul>


    </div>
  );
};

export default DesktopNavbar;
