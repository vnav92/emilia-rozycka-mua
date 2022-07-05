import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  TypographyFontFamily,
  RedirectionLink,
} from "../../../components";

import * as styles from "./reviews.module.scss";
import { getImageUrl } from "../../../shared/utils";

type ReviewsProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIconUrl: string;
  detailsLinkText: string;
  detailsLinkUrl: string;
};

export const Reviews: React.FC<ReviewsProps> = ({
  sectionTitle,
  sectionTitleIconUrl,
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
      <SectionHeader as="h3" iconUrl={sectionTitleIconUrl}>
        {sectionTitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        <div className={styles.reviewList}>
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
                      src={getImageUrl(authorphoto)}
                    />
                    <div>
                      <Typography
                        className={styles.authorName}
                        fontFamily={TypographyFontFamily.SECONDARY}
                      >
                        {authorname}
                      </Typography>
                      {authorcompany && (
                        <Typography fontFamily={TypographyFontFamily.SECONDARY}>
                          {authorcompany}
                        </Typography>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.contentSection}>
                  <Typography>{reviewcontent}</Typography>
                </div>
              </div>
            )
          )}
        </div>
        <RedirectionLink to={detailsLinkUrl} className={styles.detailsLink}>
          {detailsLinkText}
        </RedirectionLink>
      </div>
    </LimitedWidthContent>
  );
};
