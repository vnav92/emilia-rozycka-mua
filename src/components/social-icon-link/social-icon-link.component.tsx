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
    query SocialIconsQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "social-icons" } } } }
        }
      ) {
        edges {
          node {
            socialIcons {
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
    allWpPost.edges[0].node.socialIcons[socialTypeToIconGroup[socialMediaType]]
  );

  return <Button variant="outlined-contrast" imageUrl={iconUrl} href={href} isCircleShape={true}/>;
};
