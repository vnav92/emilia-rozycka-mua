import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import { NavbarWrapper } from "../navbar-wrapper";
import { NavbarProps, getFormattedPhoneNumber } from "../../shared";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { Button } from "../button";

import * as styles from "./mobile-navbar.module.scss";
import { NavbarLink } from "../navbar-link";
import { useOnClickOutside } from "./use-click-outside.hook";

export const MobileNavbar: React.FC<NavbarProps> = ({
  menuElements,
  logo,
  contactNumber,
  className,
}) => {
  const mobileNavbarRef = useRef();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useOnClickOutside(mobileNavbarRef, () => setIsMenuVisible(false));

  return (
    <NavbarWrapper logo={logo} className={className}>
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
    </NavbarWrapper>
  );
};
