import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  RedirectionLink,
  OfferGrid,
  TypographyFontFamily,
} from "../../../components";
import { getImageData } from "../../../shared";

import * as styles from "./offer.module.scss";

type OfferProps = {
  sectionTitle: React.ReactNode;
  primaryDescription: React.ReactNode;
  sectionInstruction: React.ReactNode;
  detailsRedirectionLinkText: React.ReactNode;
  detailsRedirectionLinkHref: React.ReactNode;
};

export const Offer: React.FC<OfferProps> = ({
  sectionTitle,
  primaryDescription,
  sectionInstruction,
  detailsRedirectionLinkText,
  detailsRedirectionLinkHref,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query HomeOfferQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              darkbackgroundoffersectionicon {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const { darkbackgroundoffersectionicon } = allWpPost.edges[0].node.icons;

  return (
    <LimitedWidthContent className={styles.offerSection}>
      <div className={styles.topSection}>
        <SectionHeader
          as="h3"
          icon={getImageData(darkbackgroundoffersectionicon)}
          className={styles.sectionHeader}
        >
          {sectionTitle}
        </SectionHeader>
        <div className={styles.descriptionSection}>
          <Typography 
            as="p" 
            className={styles.description}
            fontFamily={TypographyFontFamily.SECONDARY}
            >
            {primaryDescription}
          </Typography>
          <RedirectionLink to={detailsRedirectionLinkHref}>
            {detailsRedirectionLinkText}
          </RedirectionLink>
        </div>
      </div>
      <Typography 
        as="p" 
        className={styles.sectionInstruction} 
        fontFamily={TypographyFontFamily.SECONDARY}
        >
        {sectionInstruction}
      </Typography>
      <div className={styles.contentWrapper}>
        <OfferGrid />
      </div>
    </LimitedWidthContent>
  );
};
