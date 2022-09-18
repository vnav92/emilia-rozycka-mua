import React from "react";

import { LimitedWidthContent, RedirectionLink } from "../../../components";
import { SCROLL_TO_ELEMENT_ID } from "../../../shared";

import * as styles from "./company-description.module.scss";

type CompanyDescriptionProps = {
  primaryDescription: string;
  secondaryDescription: string;
  bottomDescription: string;
  bioRedirectionLinkText: string;
  bioRedirectionLinkHref: string;
};

export const CompanyDescription: React.FC<CompanyDescriptionProps> = ({
  primaryDescription,
  secondaryDescription,
  bottomDescription,
  bioRedirectionLinkText,
  bioRedirectionLinkHref,
}) => {
  return (
    <LimitedWidthContent
      className={styles.descriptionSection}
      id={SCROLL_TO_ELEMENT_ID}
    >
      <div
        className={styles.primaryDescription}
        dangerouslySetInnerHTML={{ __html: primaryDescription }}
      />
      <div
        className={styles.secondaryDescription}
        dangerouslySetInnerHTML={{ __html: secondaryDescription }}
      />
      <div
        className={styles.bottomDescription}
        dangerouslySetInnerHTML={{ __html: bottomDescription }}
      />
      <RedirectionLink to={bioRedirectionLinkHref}>
        {bioRedirectionLinkText}
      </RedirectionLink>
    </LimitedWidthContent>
  );
};
