import React from "react";
import { Button } from "../button";
import { useStaticQuery, graphql } from "gatsby";
import { getImageUrl } from "../../shared/utils";

type SocialIconLinkProps = {
  socialMediaType: "instagram" | "email";
  href: string;
};

export const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  socialMediaType,
  href,
}) => {
  const socialTypeToIconGroup = {
    instagram: "outlinedinstagramicon",
    email: "outlinedemailicon",
  };

  const { allWpPost } = useStaticQuery(graphql`
    query IconsQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              outlinedinstagramicon {
                mediaItemUrl
              }
              outlinedemailicon {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const iconUrl = getImageUrl(
    allWpPost.edges[0].node.icons[socialTypeToIconGroup[socialMediaType]]
  );

  return (
    <Button
      variant="outlined-contrast"
      imageUrl={iconUrl}
      href={href}
      isCircleShape={true}
    />
  );
};
