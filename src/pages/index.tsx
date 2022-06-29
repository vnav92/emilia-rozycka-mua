import * as React from "react";

import {
  Layout,
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
} from "../components";

import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./index.module.scss";

const IndexPage = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query HomePageQuery {
      allWpPost(filter: { title: { eq: "home" } }) {
        edges {
          node {
            home {
              ownerjobtitle
              ownername
            }
          }
        }
      }
    }
  `);

  const { ownerjobtitle, ownername } = allWpPost.edges[0].node.home;
  return (
    <Layout>
      <LimitedWidthContent
        className={styles.introductionSection}
        contentWrapperClassName={styles.primaryContent}
      >
        <div className={styles.ownerInfoWrapper}>
          <Typography
            as="h2"
            fontFamily={TypographyFontFamily.SECONDARY}
            className={styles.ownerJobTitle}
          >
            {ownerjobtitle}
          </Typography>
          <Typography as="h1" className={styles.ownerName}>
            {ownername}
          </Typography>
        </div>
        <div className={styles.socialLinksWrapper}>
          <Button href="">Wyślij wiadomość</Button>
          <Button href="" isCircleShape={true}>
            insta
          </Button>
          <Button onClick={() => {}} isCircleShape={true}>
            mail
          </Button>
        </div>
        <Button
          onClick={() => {}}
          variant="secondary"
          className={styles.scrollDownButton}
        >
          down
        </Button>
      </LimitedWidthContent>
    </Layout>
  );
};

export default IndexPage;
