import React from "react";

import { LimitedWidthContent } from "../limited-width-content";
import { Image } from "../../shared";

import * as styles from "./footer.module.scss";

type FooterProps = {
  logo: Image;
  contactNumber: string;
  emailAddress: string;
  designByLogo: Image;
};

export const Footer: React.FC<FooterProps> = ({
  logo,
  contactNumber,
  emailAddress,
  designByLogo,
}) => {
  return (
    <LimitedWidthContent renderAs="footer" className={styles.footerWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.contactSection}>
          <img
            src={logo.mediaItemUrl}
            alt={logo.altText}
            className={styles.logo}
          />
          <div className={styles.contactLinksSection}>
            <a href={`tel:${contactNumber}`} className={styles.telLink}>
              {contactNumber}
            </a>
            <a href={`mailto:${emailAddress}`} className={styles.mailLink}>
              {emailAddress}
            </a>
          </div>
        </div>
        <div className={styles.linksSection}></div>
      </div>
      <div className={styles.copyrightSection}>
        {/* TODO Make configurable */}
        <span>
          Copyright &copy; {new Date().getFullYear()} Makeup artist Emilia
          Różycka
        </span>
        <div className={styles.designBySection}>
          Design by{" "}
          <img
            src={designByLogo.mediaItemUrl}
            alt={designByLogo.altText}
            className={styles.designByLogo}
          />
        </div>
      </div>
    </LimitedWidthContent>
  );
};
