/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { DesktopNavbar } from "../desktop-navbar";

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
        logoUrl={logo.mediaItemUrl}
      />
      <main>{children}</main>
    </>
  );
};
