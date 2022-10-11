import React from "react";
import { Link } from "gatsby";

import { LimitedWidthContent } from "../limited-width-content";
import { Image } from "../../shared";

import * as styles from "./footer.module.scss";
import { Typography, TypographyFontFamily } from "../typography";

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
            <Typography
              as="p"
              fontFamily={TypographyFontFamily.SECONDARY}
              className={styles.label}
            >
              {"Kontakt:"}
            </Typography>
            <Link to={`tel:${contactNumber}`} className={styles.telLink}>
              {contactNumber}
            </Link>
            <Link to={`mailto:${emailAddress}`} className={styles.mailLink}>
              {emailAddress}
            </Link>
          </div>
          <div className={styles.contactLinksSection}>
            {/* TODO Make it configurable */}

            <Typography
              as="p"
              fontFamily={TypographyFontFamily.SECONDARY}
              className={styles.label}
            >
              {"Social:"}
            </Typography>

            <Link
              to={"https://www.instagram.com/emiliarozycka/"}
              target={"_blank"}
              className={styles.telLink}
            >
              {"Instagram"}
            </Link>
            <Link
              to={"https://www.facebook.com/emilia.rozycka.makeup"}
              target={"_blank"}
              className={styles.telLink}
            >
              {"Facebook"}
            </Link>
            <Link
              to={
                "https://www.linkedin.com/in/emilia-r%C3%B3%C5%BCycka-ab497a12a/"
              }
              target={"_blank"}
              className={styles.telLink}
            >
              {"Linkedin"}
            </Link>
          </div>
        </div>
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
