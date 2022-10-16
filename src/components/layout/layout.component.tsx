import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useLocation } from "@reach/router";

import { DesktopNavbar } from "../desktop-navbar";
import { NavbarWrapper } from "../navbar-wrapper";
import { Footer } from "../footer";
import { MobileNavbar } from "../mobile-navbar/mobile-navbar.component";
import { Seo } from "../seo";

import * as styles from "./layout.module.scss";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();
  const { allWpPage, allWpPost } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allWpPage {
        edges {
          node {
            slug
            title
            menuOrder
            offerDetails {
              primarytitle
            }
          }
        }
      }
      allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              contactnumber
            }
          }
        }
      }
    }
  `);

  const menuElements = allWpPage.edges
    .sort((a, b) => a.node.menuOrder - b.node.menuOrder)
    .map(({ node }) => ({
      label: node.offerDetails.primarytitle,
      href: `/${node.slug}`,
    }));

  const { contactnumber } = allWpPost.edges[0].node.navbar;

  const navbarProps = {
    menuElements,
    contactNumber: contactnumber,
    isDark: pathname === "/",
  };

  return (
    <>
      <Seo />
      <NavbarWrapper className={styles.desktopNavbar}>
        <DesktopNavbar {...navbarProps} />
      </NavbarWrapper>
      <NavbarWrapper className={styles.mobileNavbar}>
        <MobileNavbar {...navbarProps} />
      </NavbarWrapper>

      <main>{children}</main>
      <Footer />
    </>
  );
};
