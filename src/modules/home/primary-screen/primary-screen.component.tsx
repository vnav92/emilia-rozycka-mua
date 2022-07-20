import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
  MessengerContactLink,
  SocialIconLink,
} from "../../../components";
import { getImageUrl } from "../../../shared/utils";

import * as styles from "./primary-screen.module.scss";

type PrimaryScreenProps = {
  ownerJobTitle: string;
  ownerName: string;
  primaryImageUrl: string;
};

export const PrimaryScreen: React.FC<PrimaryScreenProps> = ({
  ownerJobTitle,
  ownerName,
  primaryImageUrl,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
  query DownIconQuery {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
      }
    ) {
      edges {
          node {
            icons {
              lightbackgrounddownicon {
                mediaItemUrl
              }
            }
          }
        }
    }
  }
`);

const downIconUrl = getImageUrl(
  allWpPost.edges[0].node.icons.lightbackgrounddownicon
);

  return (
    <section>
      <LimitedWidthContent
        className={styles.introductionSection}
        contentWrapperClassName={styles.primaryContent}
        renderAs="div"
      >
        <div className={styles.ownerInfoWrapper}>
          <Typography
            as="h2"
            fontFamily={TypographyFontFamily.SECONDARY}
            className={styles.ownerJobTitle}
          >
            {ownerJobTitle}
          </Typography>
          <Typography as="h1" className={styles.ownerName}>
            {ownerName}
          </Typography>
        </div>
        <div className={styles.socialLinksWrapper}>
          <MessengerContactLink
            iconVariant="dark-background"
            buttonVariant="outlined-contrast"
            linkUrl=""
          >
            Wyślij wiadomość
          </MessengerContactLink>
          <SocialIconLink href="" socialMediaType="instagram" />
          <SocialIconLink href="" socialMediaType="email" />
        </div>
        <Button
          onClick={() => {}}
          variant="secondary"
          className={styles.scrollDownButton}
        >
          <img src={downIconUrl} alt="" className={styles.scrollDownButtonIcon}/>
        </Button>
      </LimitedWidthContent>
      <div
        className={styles.primaryPhotoSection}
        style={{ backgroundImage: `url("${primaryImageUrl}")` }}
      />
    </section>
  );
};
