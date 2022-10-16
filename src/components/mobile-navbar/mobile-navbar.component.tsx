import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import classNames from "classnames";
import {
  NavbarProps,
  getFormattedPhoneNumber,
  useIsOnHomePage,
} from "../../shared";
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
  const mobileNavbarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerButtonRef = useRef();
  const isOnHomePage = useIsOnHomePage();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useOnClickOutside(mobileNavbarRef, triggerButtonRef, () =>
    setIsMenuVisible(false)
  );

  return (
    <>
      <Button
        onClick={() => setIsMenuVisible(isVisible => !isVisible)}
        ref={triggerButtonRef}
        isBorderDisabled={true}
        variant={isOnHomePage ? "primary" : "secondary"}
        className={classNames(
          styles.menuTriggerButton,
          isOnHomePage
            ? styles.lightMenuTriggerButton
            : styles.darkMenuTriggerButton
        )}
      >
        {isMenuVisible ? (
          <IoMdClose
            className={classNames(
              styles.menuTriggerIcon,
              isOnHomePage
                ? styles.lightMenuTriggerIcon
                : styles.darkMenuTriggerIcon
            )}
          />
        ) : (
          <BiMenu
            className={classNames(
              styles.menuTriggerIcon,
              isOnHomePage
                ? styles.lightMenuTriggerIcon
                : styles.darkMenuTriggerIcon
            )}
          />
        )}
      </Button>
      <div
        ref={mobileNavbarRef}
        className={classNames(
          styles.menuWrapper,
          isOnHomePage
            ? styles.lightBackgroundMenuWrapper
            : styles.darkBackgroundMenuWrapper,
          {
            [styles.openedMenuWrapper]: isMenuVisible,
          }
        )}
      >
        <ul className={styles.list}>
          {menuElements.map(({ href, label, route }, index) => (
            <li className={styles.menuItem} key={index}>
              <NavbarLink
                to={route || href}
                className={classNames(
                  isOnHomePage
                    ? styles.lightNavbarLinkText
                    : styles.darkNavbarLinkText
                )}
              >
                {label}
              </NavbarLink>
            </li>
          ))}
        </ul>
        <hr />
        <div className={styles.contactNumberLinkWrapper}>
          <a
            className={classNames(
              styles.contactNumberLink,
              isOnHomePage
                ? styles.lightNavbarLinkText
                : styles.darkNavbarLinkText
            )}
            href={`tel:${contactNumber}`}
          >
            {getFormattedPhoneNumber(contactNumber)}
          </a>
        </div>
      </div>
    </>
  );
};
