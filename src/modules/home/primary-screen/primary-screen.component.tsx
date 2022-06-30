import * as React from "react";

import {
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
} from "../../../components";

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
      <div
        className={styles.primaryPhotoSection}
        style={{ backgroundImage: `url("${primaryImageUrl}")` }}
      />
    </section>
  );
};
