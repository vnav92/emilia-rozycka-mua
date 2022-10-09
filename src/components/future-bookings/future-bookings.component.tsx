import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  TypographyHeadingHuge,
  TypographyBodySize,
  MessengerContactLink,
  TypographyFontFamily
} from "../";

import * as styles from "./future-bookings.module.scss";

export const FutureBookings: React.FC = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query FutureBookingsQuery {
      allWpPost(filter: { title: { eq: "home" } }) {
        edges {
          node {
            home {
              futurebookingslinetwo
              futurebookingslineone
              futurebookingslinethree
              futurebookingslinktext
              futurebookingsbackgroundimage {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const {
    futurebookingslineone,
    futurebookingslinetwo,
    futurebookingslinethree,
    futurebookingslinktext,
    futurebookingsbackgroundimage,
  } = allWpPost.edges[0].node.home;

  return (
    <section
      className={styles.futureBookingsSection}
      style={{backgroundImage: `url('${futurebookingsbackgroundimage.mediaItemUrl}')`}} 
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <div
          className={styles.imageBlock}
        >
          <img src={`${futurebookingsbackgroundimage.mediaItemUrl}`} alt="test" />
        </div>
        <div
          className={styles.textBlock}
        >
          <Typography 
            as="p" 
            color={TypographyColor.DARK_PRIMARY} 
            fontFamily={TypographyFontFamily.SECONDARY}
            className={styles.lineOne}>
            {futurebookingslineone}
          </Typography>

          <div>
            <Typography
              as="p"
              color={TypographyColor.DARK_SECONDARY}
              fontFamily={TypographyFontFamily.SECONDARY}
              bodyTextSize={TypographyBodySize.REG}
              className={styles.lineTwo}
            >
              {futurebookingslinetwo}
            </Typography>
            <Typography
              as="h1"
              color={TypographyColor.DARK_PRIMARY}
              fontFamily={TypographyFontFamily.PRIMARY}
              className={styles.lineThree}
            >
              {futurebookingslinethree}
            </Typography>
          </div>
          <MessengerContactLink
            buttonVariant="outlined"
            iconVariant="light-background"
          >
            {futurebookingslinktext}
          </MessengerContactLink>
        </div>

      </LimitedWidthContent>
    </section>
  );
};
