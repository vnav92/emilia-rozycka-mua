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
  backgroundVariant?: "dark" | "gray" | "light";
  breadcrumbElement?: JSX.Element;
  className?: string;
  children?: React.ReactNode;
};

export const SubpageHeading: React.FC<SubpageHeadingProps> = ({
  secondaryTitle,
  primaryTitle,
  backgroundVariant,
  breadcrumbElement,
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

  const { emailaddress, instagramlink } = allWpPost.edges[0].node.navbar;

  return (
    <LimitedWidthContent
      renderAs="div"
      className={classNames(
        {
          [styles.darkBackground]: backgroundVariant === "dark",
          [styles.grayBackground]: backgroundVariant === "gray",
          [styles.lightBackground]: backgroundVariant === "light",
        },
        styles.subpageHeadingWrapper
      )}
      contentWrapperClassName={classNames(
        styles.subpageContentHeadingWrapper,
        className
      )}
    >
      <div className={styles.titleWrapper}>
        {breadcrumbElement}
        <Typography
          as="p"
          fontFamily={TypographyFontFamily.SECONDARY}
          color={
            backgroundVariant === "dark"
              ? TypographyColor.LIGHT_SECONDARY
              : TypographyColor.LIGHT_SECONDARY
          }
          className={styles.secondaryLightTitle}
        >
          {secondaryTitle}
        </Typography>
        <Typography
          as="h1"
          color={
            backgroundVariant === "dark"
              ? TypographyColor.LIGHT_PRIMARY
              : TypographyColor.LIGHT_SECONDARY
          }
          className={styles.primaryLightTitle}
        >
          {primaryTitle}
        </Typography>
      </div>
      <div className={styles.socialLinksWrapper}>
        <MessengerContactLink
          iconVariant={
            backgroundVariant === "dark"
              ? "dark-background"
              : "light-background"
          }
          buttonVariant={
            backgroundVariant === "dark" ? "outlined-contrast" : "outlined"
          }
        >
          Wyślij wiadomość
        </MessengerContactLink>
        <SocialIconLink
          href={instagramlink}
          variant={
            backgroundVariant === "dark"
              ? "instagram-dark-background"
              : "instagram-light-background"
          }
        />
        <SocialIconLink
          href={`mailto:${emailaddress}`}
          variant={
            backgroundVariant === "dark"
              ? "email-dark-background"
              : "email-light-background"
          }
        />
      </div>
      {children}
    </LimitedWidthContent>
  );
};
