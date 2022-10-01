import React from "react";
import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  RedirectionLink,
  OfferGrid,
} from "../../../components";
import { Image } from "../../../shared";
import * as styles from "./offer.module.scss";

type OfferProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIcon: Image;
  primaryDescription: React.ReactNode;
  sectionInstruction: React.ReactNode;
  detailsRedirectionLinkText: React.ReactNode;
  detailsRedirectionLinkHref: React.ReactNode;
};

const desktopColumnsNumber = 3;
const tabletColumnsNumber = 2;

export const Offer: React.FC<OfferProps> = ({
  sectionTitle,
  sectionTitleIcon,
  primaryDescription,
  sectionInstruction,
  detailsRedirectionLinkText,
  detailsRedirectionLinkHref,
}) => (
  <LimitedWidthContent className={styles.offerSection}>
    <div className={styles.topSection}>
      <SectionHeader
        as="h3"
        icon={sectionTitleIcon}
        className={styles.sectionHeader}
      >
        {sectionTitle}
      </SectionHeader>
      <div className={styles.descriptionSection}>
        <Typography as="p" className={styles.description}>
          {primaryDescription}
        </Typography>
        <RedirectionLink to={detailsRedirectionLinkHref}>
          {detailsRedirectionLinkText}
        </RedirectionLink>
      </div>
    </div>
    <Typography className={styles.sectionInstruction}>
      {sectionInstruction}
    </Typography>
    <div className={styles.contentWrapper}>
      <OfferGrid />
    </div>
  </LimitedWidthContent>
);
