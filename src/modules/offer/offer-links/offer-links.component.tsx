import React from "react";

import {
  OfferGrid,
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
  Typography,
  TypographyFontFamily,
} from "../../../components";
import { Image } from "../../../shared";

import * as styles from "./offer-links.module.scss";

type OfferLinksProps = {
  sectionTitle: string;
  sectionDescription: string;
  sectionTitleIcon: Image;
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
          as="h2"
          color={TypographyColor.DARK_PRIMARY}
          icon={sectionTitleIcon}
        >
          {sectionTitle}
        </SectionHeader>
        <Typography
          as="p"
          color={TypographyColor.DARK_PRIMARY}
          fontFamily={TypographyFontFamily.SECONDARY}
        >
          {sectionDescription}
        </Typography>
      </div>
      <OfferGrid />
    </LimitedWidthContent>
  );
};
