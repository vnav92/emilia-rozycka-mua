import React from "react";
import classNames from "classnames";

import {
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
} from "../../../components";

import * as styles from "./faq.module.scss";

type FaqProps = {
    sectionTitle: string;
    sectionDescription: string;
    sectionTitleIcon: React.ReactNode;
};

export const Faq: React.FC<FaqProps> = ({
    sectionTitleIcon,
    sectionTitle,
}) => {
  return (
    <LimitedWidthContent className={classNames(styles.faqSection, styles.darkBackground)}>
        <SectionHeader
          as="h2"
          color={TypographyColor.LIGHT_PRIMARY}
          icon={sectionTitleIcon}
        >
          {sectionTitle}
        </SectionHeader>

        <div className={styles.faqList}>
        </div>
    </LimitedWidthContent>
  );
};
