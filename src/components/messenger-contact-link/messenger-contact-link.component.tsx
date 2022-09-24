import React from "react";
import { Button } from "../button";

import { useStaticQuery, graphql } from "gatsby";
import { getImageData } from "../../shared/utils";

import * as styles from "./messenger-contact-link.module.scss";

type MessengerContactLinkProps = {
  iconVariant: "dark-background" | "light-background";
  buttonVariant: "outlined" | "outlined-contrast";
  linkUrl: string;
  children: React.ReactNode;
};

export const MessengerContactLink: React.FC<MessengerContactLinkProps> = ({
  iconVariant,
  buttonVariant,
  linkUrl,
  children,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query MessengerIconsQuery {
      allWpPost(
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
    }
  `);

  const messengerIcon = getImageData(
    allWpPost.edges[0].node.icons[
      iconVariant === "dark-background"
        ? "darkbackgroundmessengericon"
        : "lightbackgroundmessengericon"
    ]
  );

  return (
    <Button
      href={linkUrl}
      image={messengerIcon}
      variant={buttonVariant}
      className={styles.actionButton}
    >
      {children}
    </Button>
  );
};
