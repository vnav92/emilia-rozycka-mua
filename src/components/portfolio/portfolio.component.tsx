import React from "react";
import classNames from "classnames";
import { useStaticQuery, graphql } from "gatsby";

import { getImageData } from "../../shared";
import {
  LimitedWidthContent,
  SectionHeader,
  RedirectionLink,
  TypographyColor,
} from "../";

import * as styles from "./portfolio.module.scss";

type PortfolioProps = {
  isLightBackground?: boolean;
};

export const Portfolio: React.FC<PortfolioProps> = ({ isLightBackground }) => {
  const { home, icons } = useStaticQuery(graphql`
    query PortfolioQuery {
      home: allWpPost(filter: { title: { eq: "home" } }) {
        edges {
          node {
            home {
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
      icons: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              lightbackgroundportfoliosectionicon {
                mediaItemUrl
                altText
              }
              darkbackgroundportfoliosectionicon {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const {
    portfoliosectiontitle,
    portfoliotopphoto,
    portfoliomiddlephoto,
    portfoliobottomphoto,
    portfoliodetailslinktext,
    portfoliodetailslinkurl,
  } = home.edges[0].node.home;
  const {
    lightbackgroundportfoliosectionicon,
    darkbackgroundportfoliosectionicon,
  } = icons.edges[0].node.icons;
  return (
    <LimitedWidthContent
      className={classNames(
        styles.portfolioSection,
        isLightBackground && styles.lightBackground
      )}
    >
      <SectionHeader
        as="h2"
        icon={getImageData(
          isLightBackground
            ? lightbackgroundportfoliosectionicon
            : darkbackgroundportfoliosectionicon
        )}
        color={
          isLightBackground
            ? TypographyColor.DARK_PRIMARY
            : TypographyColor.LIGHT_PRIMARY
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
            href={portfoliodetailslinkurl}
            className={styles.detailsLink}
          >
            {portfoliodetailslinktext}
          </RedirectionLink>
        </div>
      </div>
    </LimitedWidthContent>
  );
};
