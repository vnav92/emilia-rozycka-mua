import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  MessengerContactLink,
} from "../../../components";
import { Image } from "../../../shared";

import * as styles from "./future-bookings.module.scss";

type FutureBookingsProps = {
  lineOne: string;
  lineTwo: string;
  lineThree: string;
  linkText: string;
  backgroundImage: Image;
};

export const FutureBookings: React.FC<FutureBookingsProps> = ({
  lineOne,
  lineTwo,
  lineThree,
  linkText,
  backgroundImage,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query GlobalDataQuery {
      allWpPost(filter: { title: { eq: "global-data" } }) {
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

  const facebookLink = allWpPost.edges[0].node.navbar.facebooklink;

  return (
    <section
      className={styles.futureBookingsSection}
      style={{ backgroundImage: `url('${backgroundImage.mediaItemUrl}')` }}
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <Typography color={TypographyColor.PRIMARY} className={styles.lineOne}>
          {lineOne}
        </Typography>
        <div>
          <Typography
            color={TypographyColor.PRIMARY}
            className={styles.lineTwo}
          >
            {lineTwo}
          </Typography>
          <Typography
            as="h4"
            color={TypographyColor.PRIMARY}
            className={styles.lineThree}
          >
            {lineThree}
          </Typography>
        </div>
        <MessengerContactLink
          linkUrl={facebookLink}
          buttonVariant="outlined"
          iconVariant="light-background"
        >
          {linkText}
        </MessengerContactLink>
      </LimitedWidthContent>
    </section>
  );
};
