import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  LimitedWidthContent,
  Typography,
  TypographyColor,
  TypographyBodySize,
  MessengerContactLink,
  TypographyFontFamily
} from "../";

import * as styles from "./cta-questions.module.scss";

export const CtaQuestions: React.FC = () => {
  return (
    <section
      className={styles.ctaQuestionsSection}
      style={{backgroundImage: `url('')`}} 
    >
      <LimitedWidthContent
        renderAs="div"
        contentWrapperClassName={styles.contentWrapper}
      >
        <div className={styles.imageBlock}>
          <img src={``} alt="test" />
        </div>

        <div
          className={styles.textBlock}
        >
          <Typography 
            as="h3" 
            color={TypographyColor.DARK_PRIMARY} 
            fontFamily={TypographyFontFamily.PRIMARY}
            className={styles.lineOne}>
            {'W mojej ofercie nie ma typu makijażu którego szukasz?'}
          </Typography>
          <MessengerContactLink
            buttonVariant="outlined"
            iconVariant="light-background"
          >
            {'Zadaj pytanie'}
          </MessengerContactLink>
        </div>
      </LimitedWidthContent>
    </section>
  );
};
