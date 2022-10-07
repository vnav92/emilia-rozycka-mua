import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";

import {
  Typography,
  TypographyFontFamily,
  TypographyColor,
} from "../typography";
import { MessengerContactLink } from "../messenger-contact-link";
import { SocialIconLink } from "../social-icon-link";
import { LimitedWidthContent } from "../limited-width-content";

import * as styles from "./subpage-heading.module.scss";

type SubpageHeadingProps = {
  secondaryTitle: React.ReactNode;
  primaryTitle: React.ReactNode;
  isLightBackground?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const SubpageHeading: React.FC<SubpageHeadingProps> = ({
  secondaryTitle,
  primaryTitle,
  isLightBackground,
  className,
  children,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query ContactDataQuery {
      allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              emailaddress
              instagramlink
            }
          }
        }
      }
    }
  `);

  const { emailaddress, instagramlink, facebooklink } =
    allWpPost.edges[0].node.navbar;

  return (
    <LimitedWidthContent
      renderAs="div"
      className={classNames(
        isLightBackground ? styles.lightBackground : styles.darkBackground,
        styles.subpageHeadingWrapper
      )}
      contentWrapperClassName={classNames(
        styles.subpageContentHeadingWrapper,
        className
      )}
    >
      <div className={styles.titleWrapper}>
        <Typography
          as="h2"
          fontFamily={TypographyFontFamily.SECONDARY}
          color={
            isLightBackground
              ? TypographyColor.PRIMARY
              : TypographyColor.PRIMARY_CONTRAST
          }
          className={styles.secondaryTitle}
        >
          {secondaryTitle}
        </Typography>
        <Typography
          as="h1"
          color={
            isLightBackground
              ? TypographyColor.PRIMARY
              : TypographyColor.PRIMARY_CONTRAST
          }
          className={styles.primaryTitle}
        >
          {primaryTitle}
        </Typography>
      </div>
      <div className={styles.socialLinksWrapper}>
        <MessengerContactLink
          iconVariant={
            isLightBackground ? "light-background" : "dark-background"
          }
          buttonVariant={isLightBackground ? "outlined" : "outlined-contrast"}
        >
          Wyślij wiadomość
        </MessengerContactLink>
        <SocialIconLink
          href={instagramlink}
          variant={
            isLightBackground
              ? "instagram-light-background"
              : "instagram-dark-background"
          }
        />
        <SocialIconLink
          href={`mailto:${emailaddress}`}
          variant={
            isLightBackground
              ? "email-light-background"
              : "email-dark-background"
          }
        />
      </div>
      {children}
    </LimitedWidthContent>
  );
};
