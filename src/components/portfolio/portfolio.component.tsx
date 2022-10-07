import React from "react";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";

import { LimitedWidthContent, SectionHeader, RedirectionLink } from "../";

import * as styles from "./portfolio.module.scss";
import { TypographyColor } from "../typography";

type PortfolioProps = {
  isLightBackground?: boolean;
};

export const Portfolio: React.FC<PortfolioProps> = ({ isLightBackground }) => {
  const { allWpPost } = useStaticQuery(graphql`
    query PortfolioQuery {
      allWpPost(filter: { title: { eq: "home" } }) {
        edges {
          node {
            home {
              portfoliosectionicon {
                mediaItemUrl
                altText
              }
              portfoliosectiontitle
              portfoliotopphoto {
                mediaItemUrl
                altText
              }
              portfoliomiddlephoto {
                mediaItemUrl
                altText
              }
              portfoliobottomphoto {
                mediaItemUrl
                altText
              }
              portfoliodetailslinktext
              portfoliodetailslinkurl
            }
          }
        }
      }
    }
  `);

  const {
    portfoliosectionicon,
    portfoliosectiontitle,
    portfoliotopphoto,
    portfoliomiddlephoto,
    portfoliobottomphoto,
    portfoliodetailslinktext,
    portfoliodetailslinkurl,
  } = allWpPost.edges[0].node.home;
  return (
    <LimitedWidthContent
      className={classNames(
        styles.portfolioSection,
        isLightBackground && styles.lightBackground
      )}
    >
      <SectionHeader
        as="h3"
        icon={portfoliosectionicon}
        color={
          isLightBackground
            ? TypographyColor.PRIMARY
            : TypographyColor.PRIMARY_CONTRAST
        }
      >
        {portfoliosectiontitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        <img
          className={styles.topImage}
          src={portfoliotopphoto.mediaItemUrl}
          alt={portfoliotopphoto.altText}
        />
        <img
          className={styles.middleImage}
          src={portfoliomiddlephoto.mediaItemUrl}
          alt={portfoliomiddlephoto.altText}
        />
        <img
          className={styles.bottomImage}
          src={portfoliobottomphoto.mediaItemUrl}
          alt={portfoliobottomphoto.altText}
        />
        <div
          className={classNames(
            styles.detailsButtonWrapper,
            isLightBackground && styles.lightBackground,
            isLightBackground && styles.lightBackgroundBorder
          )}
        >
          <RedirectionLink
            to={portfoliodetailslinkurl}
            className={styles.detailsLink}
          >
            {portfoliodetailslinktext}
          </RedirectionLink>
        </div>
      </div>
    </LimitedWidthContent>
  );
};
