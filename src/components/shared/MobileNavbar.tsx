"use client";
import {
  ArrowDown2,
  Blogger,
  Briefcase,
  CallAdd,
  Home2,
  UserSquare,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import AnimateHeight from "react-animate-height";

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
    path: "#notYet",
  },
  {
    id: "contact-page",
    menuTitle: "Contact",
    path: "/contact",
  },
];

type Props = {
  sidebarToggle: boolean;
  handleToggle: () => void;
  setSidebarToggle: Dispatch<SetStateAction<boolean>>;
};

const MobileNavbar = ({
  sidebarToggle,
  handleToggle,
  setSidebarToggle,
}: Props) => {
  const [dropDown, setDropDown] = useState("");

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  const pathName = usePathname();

  return (
    <div className="">
      <div
        className={`mobile-sidebar-overlay ${sidebarToggle ? "mobile-sidebar-overlay-show" : "mobile-sidebar-overlay-hide"
          }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`mobile-sidebar-containe ${sidebarToggle ? "mobile-sidebar-show" : "mobile-sidebar-hide"
          }`}
      >
        <Link href={`/`} className="d-block logo-main-mobile">
          ALPH<span>POST</span>
        </Link>

        <div className="sidebar-menu-container">
          <ul className="mobile-sidebar-menus">
            {navbarData.map(({ id, menuTitle, path, menuItems, icon, disabled }) => {
              let isActive = menuItems?.some(
                (menuItem) => pathName === menuItem.menuItemPath && !disabled
              );
              return menuItems ? (
                <li
                  key={id}
                  className={`position-relative ${disabled ? 'menu-item-disabled' : ''}`}
                >
                  <p
                    onClick={() => !disabled && handleDropDown(id)}
                    className="d-flex align-items-center mobile-menu-item justify-content-between mobile-single-menu"
                    style={disabled ? { color: "gray" } : { color: "white" }}
                  >
                    <span className="mobile-menu-link">
                      {icon} <span className="textXL">{menuTitle}</span>
                    </span>
                    <ArrowDown2
                      className={`${dropDown === id ? "icon-rotate" : "icon-normal"}`}
                    />
                  </p>
                  <AnimateHeight
                    duration={500}
                    height={dropDown === id ? "auto" : 0}
                    aria-label={`example-panel-${menuTitle}`}
                  >
                    <ul className="list-unstyled mobile-sidebar-menu-modal">
                      {menuItems.map(({ id, title, menuItemPath }) => (
                        <li key={id} className={`sub-item`}>
                          <Link
                            onClick={() => setSidebarToggle(false)}
                            href={`${menuItemPath}`}
                            className="d-flex align-items-center justify-content-between mobile-single-menu"
                          >
                            <span
                              className={`textM mobile-menu-link ${pathName === menuItemPath && "text-secondary"
                                }`}
                              style={disabled ? { color: "gray" } : { color: "white" }}
                            >
                              {title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimateHeight>
                </li>
              ) : (
                <li
                  key={id}
                  className={`mobile-menu-item ${pathName === path && "text-secondary"} ${disabled ? "menu-item-disabled" : ""
                    }`}
                >
                  <Link
                    onClick={() => !disabled && setSidebarToggle(false)}
                    href={`${disabled ? "#" : path}`}
                    className="d-flex align-items-center justify-content-between mobile-single-menu"
                    style={disabled ? { pointerEvents: "none", color: "gray" } : {}}
                  >
                    <span className="textXL mobile-menu-link">
                      {icon} <span>{menuTitle}</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
