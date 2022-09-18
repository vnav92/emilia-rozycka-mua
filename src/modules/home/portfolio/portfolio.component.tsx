import React from "react";

import {
  LimitedWidthContent,
  SectionHeader,
  RedirectionLink,
} from "../../../components";
import { Image } from "../../../shared";

import * as styles from "./portfolio.module.scss";

type PortfolioProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIcon: Image;
  topImage: Image;
  middleImage: Image;
  bottomImage: Image;
  detailsLinkText: React.ReactNode;
  detailsLinkUrl: string;
};

export const Portfolio: React.FC<PortfolioProps> = ({
  sectionTitle,
  sectionTitleIcon,
  topImage,
  // @TODO add alt
  middleImage,
  bottomImage,
  detailsLinkText,
  detailsLinkUrl,
}) => {
  return (
    <LimitedWidthContent className={styles.portfolioSection}>
      <SectionHeader as="h3" icon={sectionTitleIcon}>
        {sectionTitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        <img
          className={styles.topImage}
          src={topImage.mediaItemUrl}
          alt={topImage.altText}
        />
        <img
          className={styles.middleImage}
          src={middleImage.mediaItemUrl}
          alt={middleImage.altText}
        />
        <img
          className={styles.bottomImage}
          src={bottomImage.mediaItemUrl}
          alt={bottomImage.altText}
        />
        <div className={styles.detailsButtonWrapper}>
          <RedirectionLink to={detailsLinkUrl} className={styles.detailsLink}>
            {detailsLinkText}
          </RedirectionLink>
        </div>
      </div>
    </LimitedWidthContent>
  );
};
