import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { DesktopNavbar } from "../desktop-navbar";
import { getImageData } from "../../shared/utils";
import { Footer } from "../footer";
import { MobileNavbar } from "../mobile-navbar/mobile-navbar.component";

import * as styles from "./layout.module.scss";

export const Layout = ({ children }) => {
  const { allWpPage, allWpPost } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allWpPage {
        edges {
          node {
            title
            menuOrder
          }
        }
      }
      allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              contactnumber
              emailaddress
              simplelogo {
                mediaItemUrl
                altText
              }
              fulllogo {
                mediaItemUrl
                altText
              }
              designbylogo {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const menuElements = allWpPage.edges
    .sort(({ menuOrder }) => menuOrder)
    .map(({ node }) => ({
      label: node.title,
      href: `/${node.title}`,
    }));

  const { contactnumber, designbylogo, emailaddress, simplelogo, fulllogo } =
    allWpPost.edges[0].node.navbar;

  const navbarProps = {
    menuElements,
    contactNumber: contactnumber,
    logo: getImageData(simplelogo),
  };

  return (
    <>
      <DesktopNavbar {...navbarProps} className={styles.desktopNavbar} />
      <MobileNavbar {...navbarProps} className={styles.mobileNavbar} />
      <main>{children}</main>
      <Footer
        logo={getImageData(fulllogo)}
        contactNumber={contactnumber}
        emailAddress={emailaddress}
        designByLogo={getImageData(designbylogo)}
      />
    </>
  );
};
