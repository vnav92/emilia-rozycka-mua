import React from "react";

import { LimitedWidthContent } from "../limited-width-content";

import * as styles from "./footer.module.scss";

type FooterProps = {
  logoUrl: string;
  contactNumber: string;
  emailAddress: string;
  designByLogoUrl: string;
};

export const Footer: React.FC<FooterProps> = ({
  logoUrl,
  contactNumber,
  emailAddress,
  designByLogoUrl,
}) => {
  return (
    <LimitedWidthContent renderAs="footer" className={styles.footerWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.contactSection}>
          <img src={logoUrl} alt="" className={styles.logo} />
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
        <span>
          Copyright &copy; {new Date().getFullYear()} Makeup artist Emilia
          Różycka
        </span>
        <div className={styles.designBySection}>
          Design by{" "}
          <img src={designByLogoUrl} alt="" className={styles.designByLogo} />
        </div>
      </div>
    </LimitedWidthContent>
  );
};
