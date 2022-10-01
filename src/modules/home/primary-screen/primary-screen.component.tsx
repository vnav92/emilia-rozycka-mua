import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Button,
  SubpageHeading,
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
    }
  `);

  const downIcon = getImageData(
    result.icons.edges[0].node.icons.lightbackgrounddownicon
  );

  return (
    <section>
      <SubpageHeading
        primaryTitle={ownerName}
        secondaryTitle={ownerJobTitle}
        className={styles.introductionSection}
      >
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
      </SubpageHeading>

      <div
        className={styles.primaryPhotoSection}
        style={{ backgroundImage: `url("${primaryImage.mediaItemUrl}")` }}
      />
    </section>
  );
};
