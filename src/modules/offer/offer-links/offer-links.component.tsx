import React from "react";

import {
  OfferGrid,
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
  Typography,
} from "../../../components";

import * as styles from "./offer-links.module.scss";

type OfferLinksProps = {
  sectionTitle: string;
  sectionDescription: string;
  sectionTitleIcon: React.ReactNode;
};

export const OfferLinks: React.FC<OfferLinksProps> = ({
  sectionTitleIcon,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <LimitedWidthContent className={styles.offerSection}>
      <div className={styles.headingSection}>
        <SectionHeader
          as="h3"
          color={TypographyColor.PRIMARY}
          icon={sectionTitleIcon}
        >
          {sectionTitle}
        </SectionHeader>
        <Typography
          as="p"
          className={styles.description}
          color={TypographyColor.PRIMARY}
        >
          {sectionDescription}
        </Typography>
      </div>
      <OfferGrid />
    </LimitedWidthContent>
  );
};
