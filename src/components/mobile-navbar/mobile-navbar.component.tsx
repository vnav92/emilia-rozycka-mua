import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import { NavbarProps, getFormattedPhoneNumber } from "../../shared";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../button";

import { NavbarLink } from "../navbar-link";
import { useOnClickOutside } from "./use-click-outside.hook";

import * as styles from "./mobile-navbar.module.scss";

export const MobileNavbar: React.FC<NavbarProps> = ({
  menuElements,
  contactNumber,
}) => {
  const mobileNavbarRef = useRef();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useOnClickOutside(mobileNavbarRef, () => setIsMenuVisible(false));

  return (
    <>
      <Button
        onClick={() => setIsMenuVisible(isVisible => !isVisible)}
        isBorderDisabled={true}
        className={styles.menuTriggerButton}
      >
        {isMenuVisible ? (
          <IoMdClose className={styles.menuTriggerIcon} />
        ) : (
          <BiMenu className={styles.menuTriggerIcon} />
        )}
      </Button>
      <div
        ref={mobileNavbarRef}
        className={classNames(styles.menuWrapper, {
          [styles.openedMenuWrapper]: isMenuVisible,
        })}
      >
        <ul className={styles.list}>
          {menuElements.map(({ href, label }, index) => (
            <li className={styles.menuItem} key={index}>
              <NavbarLink to={href} className={styles.navbarLinkText}>
                {label}
              </NavbarLink>
            </li>
          ))}
        </ul>
        <div className={styles.contactNumberLinkWrapper}>
          <Link
            className={styles.contactNumberLink}
            to={`tel:${contactNumber}`}
          >
            {getFormattedPhoneNumber(contactNumber)}
          </Link>
        </div>
      </div>
    </>
  );
};
