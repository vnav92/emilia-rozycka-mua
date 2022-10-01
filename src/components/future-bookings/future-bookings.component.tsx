import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  MessengerContactLink,
} from "../";

import * as styles from "./future-bookings.module.scss";

export const FutureBookings: React.FC = () => {

  const request = useStaticQuery(graphql`
  query FutureBookingsQuery {
    home: allWpPost(filter: { title: { eq: "home" } }) {
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
    globalData: allWpPost(filter: { title: { eq: "global-data" } }) {
        edges {
          node {
            navbar {
              facebooklink
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
} = request.home.edges[0].node.home;

const facebookLink = request.globalData.edges[0].node.navbar.facebooklink;

  return (
    <section
      className={styles.futureBookingsSection}
      style={{ backgroundImage: `url('${futurebookingsbackgroundimage.mediaItemUrl}')` }}
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <Typography color={TypographyColor.PRIMARY} className={styles.lineOne}>
          {futurebookingslineone}
        </Typography>
        <div>
          <Typography
            color={TypographyColor.PRIMARY}
            className={styles.lineTwo}
          >
            {futurebookingslinetwo}
          </Typography>
          <Typography
            as="h4"
            color={TypographyColor.PRIMARY}
            className={styles.lineThree}
          >
            {futurebookingslinethree}
          </Typography>
        </div>
        <MessengerContactLink
          linkUrl={facebookLink}
          buttonVariant="outlined"
          iconVariant="light-background"
        >
          {futurebookingslinktext}
        </MessengerContactLink>
      </LimitedWidthContent>
    </section>
  );
};
