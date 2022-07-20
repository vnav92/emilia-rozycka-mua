import React from "react";

import {
  LimitedWidthContent,
  SectionHeader,
  RedirectionLink,
} from "../../../components";

import * as styles from "./portfolio.module.scss";

type PortfolioProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIconUrl: string;
  topImageUrl: string;
  middleImageUrl: string;
  bottomImageUrl: string;
  detailsLinkText: React.ReactNode;
  detailtLinkUrl: string;
};

export const Portfolio: React.FC<PortfolioProps> = ({
  sectionTitle,
  sectionTitleIconUrl,
  topImageUrl,
  // @TODO add alt
  middleImageUrl,
  bottomImageUrl,
  detailsLinkText,
  detailtLinkUrl,
}) => {
  return (
    <LimitedWidthContent className={styles.portfolioSection}>
      <SectionHeader as="h3" iconUrl={sectionTitleIconUrl}>
        {sectionTitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        <img className={styles.topImage} src={topImageUrl} alt="" />
        <img className={styles.middleImage} src={middleImageUrl} alt="" />
        <img className={styles.bottomImage} src={bottomImageUrl} alt="" />
        <div className={styles.detailsButtonWrapper}>
          <RedirectionLink to={detailtLinkUrl} className={styles.detailsLink}>
            {detailsLinkText}
          </RedirectionLink>
        </div>
      </div>
    </LimitedWidthContent>
  );
};
