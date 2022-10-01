import React, { ComponentProps } from "react";
import { Button } from "../button";
import { useStaticQuery, graphql } from "gatsby";
import { getImageData } from "../../shared/utils";

type SocialIconLinkProps = {
  variant:
    | "instagram-dark-background"
    | "email-dark-background"
    | "instagram-light-background"
    | "email-light-background";
  href: string;
};

const variantToIcon: Record<SocialIconLinkProps["variant"], string> = {
  "instagram-dark-background": "darkbackgroundinstagramicon",
  "email-dark-background": "darkbackgroundemailicon",
  "instagram-light-background": "lightbackgroundinstagramicon",
  "email-light-background": "lightbackgroundemailicon",
};

const variantToButtonColor: Record<
  SocialIconLinkProps["variant"],
  ComponentProps<typeof Button>["variant"]
> = {
  "instagram-dark-background": "outlined-contrast",
  "email-dark-background": "outlined-contrast",
  "instagram-light-background": "outlined",
  "email-light-background": "outlined",
};

export const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  variant,
  href,
}) => {
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
              darkbackgroundinstagramicon {
                mediaItemUrl
                altText
              }
              darkbackgroundemailicon {
                mediaItemUrl
                altText
              }
              lightbackgroundinstagramicon {
                mediaItemUrl
                altText
              }
              lightbackgroundemailicon {
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
    allWpPost.edges[0].node.icons[variantToIcon[variant]]
  );

  return (
    <Button
      variant={variantToButtonColor[variant]}
      image={icon}
      href={href}
      isCircleShape={true}
    />
  );
};
