import React from "react";

import {
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
  Typography,
  TypographyFontFamily,
  CooperationItem,
} from "../../../components";

import * as styles from "./cooperation.module.scss";

type CooperationProps = {
    sectionTitle: string;
    sectionDescription: string;
    sectionTitleIcon: React.ReactNode;
};

export const Cooperation: React.FC<CooperationProps> = ({
    sectionTitleIcon,
    sectionTitle,
    sectionDescription
}) => {
  return (
    <LimitedWidthContent className={styles.cooperationSection}>
      <div className={styles.headingSection}>
        <SectionHeader
          as="h2"
          color={TypographyColor.DARK_PRIMARY}
          icon={sectionTitleIcon}
        >
          {sectionTitle}
        </SectionHeader>

        <CooperationItem
            itemTitleIcon={''}
            itemDescription={'Pracuję na produktach profesjonalnych (Kryolan, Affect, Luxury, Clare Blanc) i selektywnych (Estee Lauder, Dior Backstage, Hourglass, Smashbox, Fenty Beauty)'}
        />
      </div>
    </LimitedWidthContent>
  );
};
