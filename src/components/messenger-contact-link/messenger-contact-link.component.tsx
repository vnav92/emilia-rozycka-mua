import React from "react";
import { Button } from "../button";

import { useStaticQuery, graphql } from "gatsby";
import { getImageData } from "../../shared/utils";

import * as styles from "./messenger-contact-link.module.scss";

type MessengerContactLinkProps = {
  iconVariant: "dark-background" | "light-background";
  buttonVariant: "outlined" | "outlined-contrast";
  children: React.ReactNode;
};

export const MessengerContactLink: React.FC<MessengerContactLinkProps> = ({
  iconVariant,
  buttonVariant,
  children,
}) => {
  const { icons, link } = useStaticQuery(graphql`
    query MessengerContactLinkQuery {
      icons: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              lightbackgroundmessengericon {
                mediaItemUrl
                altText
              }
              darkbackgroundmessengericon {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
      link: allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              facebooklink
            }
          }
        }
      }
    }
  `);

  const messengerIcon = getImageData(
    icons.edges[0].node.icons[
      iconVariant === "dark-background"
        ? "darkbackgroundmessengericon"
        : "lightbackgroundmessengericon"
    ]
  );
  const facebookLink = link.edges[0].node.navbar.facebooklink;

  return (
    <Button
      href={facebookLink}
      image={messengerIcon}
      variant={buttonVariant}
      className={styles.actionButton}
    >
      {children}
    </Button>
  );
};
