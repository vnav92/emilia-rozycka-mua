import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import { LimitedWidthContent } from "../limited-width-content";
import { getImageData, Image } from "../../shared";

import * as styles from "./footer.module.scss";
import { Typography, TypographyFontFamily } from "../typography";

export const Footer: React.FC = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query FooterQuery {
      allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              contactnumber
              emailaddress
              instagramlink
              facebooklink
              linkedinlink
              fulllogo {
                mediaItemUrl
                altText
              }
              designbylogo {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const mainLogo = getImageData(allWpPost.edges[0].node.navbar.fulllogo);
  const designByLogo = getImageData(
    allWpPost.edges[0].node.navbar.designbylogo
  );
  const {
    contactnumber,
    emailaddress,
    linkedinlink,
    instagramlink,
    facebooklink,
  } = allWpPost.edges[0].node.navbar;

  return (
    <LimitedWidthContent renderAs="footer" className={styles.footerWrapper}>
      <div className={styles.mainContent}>
        <div className={styles.contactSection}>
          <img
            src={mainLogo.mediaItemUrl}
            alt={mainLogo.altText}
            className={styles.logo}
          />
          <div className={styles.contactLinksSection}>
            <Typography
              as="p"
              fontFamily={TypographyFontFamily.SECONDARY}
              className={styles.label}
            >
              {/* TODO fetch from WP */}
              {"Kontakt:"}
            </Typography>
            <Link to={`tel:${contactnumber}`} className={styles.telLink}>
              {contactnumber}
            </Link>
            <Link to={`mailto:${emailaddress}`} className={styles.mailLink}>
              {emailaddress}
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
              to={instagramlink}
              target={"_blank"}
              className={styles.telLink}
            >
              {"Instagram"}
            </Link>
            <Link
              to={facebooklink}
              target={"_blank"}
              className={styles.telLink}
            >
              {"Facebook"}
            </Link>
            <Link
              to={linkedinlink}
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
