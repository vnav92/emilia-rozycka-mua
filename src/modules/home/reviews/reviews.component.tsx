import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  TypographyFontFamily,
  RedirectionLink,
  TypographyColor,
} from "../../../components";
import { getImageData, Image } from "../../../shared";

import * as styles from "./reviews.module.scss";

type ReviewsProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIcon: Image;
  detailsLinkText: string;
  detailsLinkUrl: string;
};

export const Reviews: React.FC<ReviewsProps> = ({
  sectionTitle,
  sectionTitleIcon,
  detailsLinkText,
  detailsLinkUrl,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query ReviewsQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "review-item" } } } }
        }
        limit: 3
      ) {
        edges {
          node {
            reviewItem {
              authorcompany
              authorname
              authorphoto {
                mediaItemUrl
                altText
              }
              reviewcontent
            }
          }
        }
      }
    }
  `);

  const reviewItems = allWpPost.edges.map(({ node }) => node.reviewItem);

  return (
    <LimitedWidthContent className={styles.reviewsSection}>
      <SectionHeader as="h2" icon={sectionTitleIcon}>
        {sectionTitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        {reviewItems.map(
          (
            { authorcompany, authorname, authorphoto, reviewcontent },
            index
          ) => (
            <div className={styles.reviewItem} key={index}>
              <div className={styles.authorSection}>
                <div className={styles.authorSectionContent}>
                  <img
                    className={styles.authorPhoto}
                    src={getImageData(authorphoto).mediaItemUrl}
                    alt={getImageData(authorphoto).altText}
                  />
                  <div>
                    <Typography
                      as="h4"
                      className={styles.authorName}
                      fontFamily={TypographyFontFamily.PRIMARY}
                      color={TypographyColor.LIGHT_PRIMARY}
                    >
                      {authorname}
                    </Typography>
                    {authorcompany && (
                      <Typography 
                        fontFamily={TypographyFontFamily.SECONDARY}
                        >
                        {authorcompany}
                      </Typography>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.contentSection}>
                <Typography
                  as="p"
                  fontFamily={TypographyFontFamily.SECONDARY}
                >{reviewcontent}</Typography>
              </div>
            </div>
          )
        )}
        <RedirectionLink to={detailsLinkUrl} className={styles.detailsLink}>
          {detailsLinkText}
        </RedirectionLink>
      </div>
    </LimitedWidthContent>
  );
};
