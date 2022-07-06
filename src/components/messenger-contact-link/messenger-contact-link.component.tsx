import React from "react";
import { Button } from "../button";

import { useStaticQuery, graphql } from "gatsby";
import { getImageUrl } from "../../shared/utils";

type MessengerContactLinkProps = {
  variant: "outlined" | "outlined-contrast";
  linkUrl: string;
  children: React.ReactNode;
};

export const MessengerContactLink: React.FC<MessengerContactLinkProps> = ({
  variant,
  linkUrl,
  children,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query SocialIconsQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "social-icons" } } } }
        }
      ) {
        edges {
          node {
            socialIcons {
              filledmessengericon {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const messengerIconUrl = getImageUrl(
    allWpPost.edges[0].node.socialIcons.filledmessengericon
  );

  return (
    <Button
      href={linkUrl}
      imageUrl={messengerIconUrl}
      variant={variant}
      className={styles.actionButton}
    >
      {children}
    </Button>
  );
};
