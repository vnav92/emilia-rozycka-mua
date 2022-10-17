import React from "react";
import ctaBackground from "../../../static/graphics/cta/emilia-rozycka-makeup-artist-gdansk-call-to-action.jpg";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  MessengerContactLink,
  TypographyFontFamily,
} from "../";

import * as styles from "./cta-questions.module.scss";

export const CtaQuestions: React.FC = () => {
  return (
    <section
      className={styles.ctaQuestionsSection}
      style={{ backgroundImage: `url(${ctaBackground})` }}
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <div className={styles.textBlock}>
          <Typography
            as="h3"
            color={TypographyColor.DARK_PRIMARY}
            fontFamily={TypographyFontFamily.PRIMARY}
            className={styles.lineOne}
          >
            {"Potrzebujesz usługi szytej na miarę Twoich potrzeb?"}
          </Typography>
          <MessengerContactLink
            buttonVariant="outlined"
            iconVariant="light-background"
          >
            {"Zadaj pytanie"}
          </MessengerContactLink>
        </div>
      </LimitedWidthContent>
    </section>
  );
};
