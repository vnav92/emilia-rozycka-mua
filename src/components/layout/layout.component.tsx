import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { DesktopNavbar } from "../desktop-navbar";
import { getImageUrl } from "../../shared/utils";
import { Footer } from "../footer";

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
      allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              contactnumber
              emailaddress
              simplelogo {
                mediaItemUrl
              }
              fulllogo {
                mediaItemUrl
              }
              designbylogo {
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

  const { contactnumber, designbylogo, emailaddress, simplelogo, fulllogo } =
    allWpPost.edges[0].node.navbar;

  return (
    <>
      <DesktopNavbar
        menuElements={menuElements}
        contactNumber={contactnumber}
        logoUrl={getImageUrl(simplelogo)}
      />
      <main>{children}</main>
      <Footer
        logoUrl={getImageUrl(fulllogo)}
        contactNumber={contactnumber}
        emailAddress={emailaddress}
        designByLogoUrl={getImageUrl(designbylogo)}
      />
    </>
  );
};
