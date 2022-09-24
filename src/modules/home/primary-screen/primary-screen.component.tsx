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
import {
  getImageData,
  Image,
  SCROLL_TO_ELEMENT_ID,
  ELEMENT_SCROLL_OFFSET_PX,
} from "../../../shared";

import * as styles from "./primary-screen.module.scss";

type PrimaryScreenProps = {
  ownerJobTitle: string;
  ownerName: string;
  primaryImage: Image;
};

export const PrimaryScreen: React.FC<PrimaryScreenProps> = ({
  ownerJobTitle,
  ownerName,
  primaryImage,
}) => {
  const result = useStaticQuery(graphql`
    query DownIconQuery {
      icons: allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              lightbackgrounddownicon {
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
              emailaddress
              instagramlink
            }
          }
        }
      }
    }
  `);

  const downIcon = getImageData(
    result.icons.edges[0].node.icons.lightbackgrounddownicon
  );

  const { emailaddress: emailAddress, instagramlink: instagramLink } =
    result.globalData.edges[0].node.navbar;

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
            {/* TODO Set configurable link text */}
            Wyślij wiadomość
          </MessengerContactLink>
          <SocialIconLink href={instagramLink} socialMediaType="instagram" />
          <SocialIconLink
            href={`mailto:${emailAddress}`}
            socialMediaType="email"
          />
        </div>
        <Button
          onClick={() => {
            const sectionToScroll = document.querySelector(
              `#${SCROLL_TO_ELEMENT_ID}`
            );
            window.scrollTo({
              behavior: "smooth",
              top:
                sectionToScroll.getBoundingClientRect().top -
                ELEMENT_SCROLL_OFFSET_PX,
            });
          }}
          // TODO make this text configurable when i18n will be introduced
          ariaLabel="Przycisk służący do przewinięcia widoku w dół"
          variant="secondary"
          className={styles.scrollDownButton}
        >
          <img
            src={downIcon.mediaItemUrl}
            alt={downIcon.altText}
            className={styles.scrollDownButtonIcon}
          />
        </Button>
      </LimitedWidthContent>
      <div
        className={styles.primaryPhotoSection}
        style={{ backgroundImage: `url("${primaryImage.mediaItemUrl}")` }}
      />
    </section>
  );
};
