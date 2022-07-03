import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { DesktopNavbar } from "../desktop-navbar";
import { getImageUrl } from "../../shared/utils";

export const Layout = ({ children }) => {
  const { allWpPage, allWpPost } = useStaticQuery(graphql`
    query SiteTitleQuery {
      allWpPage {
        edges {
          node {
            title
          }
        }
      }
      allWpPost(filter: { title: { eq: "navbar" } }) {
        edges {
          node {
            navbar {
              contactnumber
              logo {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const menuElements = allWpPage.edges.map(({ node }) => ({
    label: node.title,
    href: `/${node.title}`,
  }));

  const { contactnumber, logo } = allWpPost.edges[0].node.navbar;

  return (
    <>
      <DesktopNavbar
        menuElements={menuElements}
        contactNumber={contactnumber}
        logoUrl={getImageUrl(logo)}
      />
      <main>{children}</main>
    </>
  );
};
