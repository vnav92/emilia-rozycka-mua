import React from "react";
import { Button } from "../button";
import classNames from "classnames";

import { useStaticQuery, graphql } from "gatsby";
import { getImageUrl } from "../../shared/utils";

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
          categories: { nodes: { elemMatch: { name: { eq: "social-icons" } } } }
        }
      ) {
        edges {
          node {
            socialIcons {
              lightbackgroundmessengericon {
                mediaItemUrl
              }
              darkbackgroundmessengericon {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const messengerIconUrl = getImageUrl(
    allWpPost.edges[0].node.socialIcons[
      iconVariant === "dark-background"
        ? "darkbackgroundmessengericon"
        : "lightbackgroundmessengericon"
    ]
  );

  return (
    <Button
      href={linkUrl}
      imageUrl={messengerIconUrl}
      variant={buttonVariant}
      className={classNames(
        styles.actionButton,
        iconVariant === "dark-background" && styles.darkBackroundButton
      )}
    >
      {children}
    </Button>
  );
};
