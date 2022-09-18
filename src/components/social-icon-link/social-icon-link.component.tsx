import React from "react";
import { Button } from "../button";
import { useStaticQuery, graphql } from "gatsby";
import { getImageData } from "../../shared/utils";

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
                altText
              }
              outlinedemailicon {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const icon = getImageData(
    allWpPost.edges[0].node.icons[socialTypeToIconGroup[socialMediaType]]
  );

  return (
    <Button
      variant="outlined-contrast"
      image={icon}
      href={href}
      isCircleShape={true}
    />
  );
};
