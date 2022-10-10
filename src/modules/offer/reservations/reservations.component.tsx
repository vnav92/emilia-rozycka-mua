import React from "react";

import {
  LimitedWidthContent,
  ReservationsItem,
  SectionHeader,
  TypographyColor,
} from "../../../components";

import * as styles from "./reservations.module.scss";

type ReservationsProps = {
    sectionTitle: string;
    sectionDescription: string;
    sectionTitleIcon: React.ReactNode;
};

export const Reservations: React.FC<ReservationsProps> = ({
    sectionTitleIcon,
    sectionTitle,
}) => {
  return (
    <LimitedWidthContent className={styles.reservationsSection}>
      <div className={styles.headingSection}>
        <SectionHeader
          as="h2"
          color={TypographyColor.DARK_PRIMARY}
          icon={sectionTitleIcon}
        >
          {sectionTitle}
        </SectionHeader>

        <div className={styles.reservationsList}>
          <ReservationsItem 
            itemNumber={"1"}
            itemHeading={"Wybierz z oferty interesującą Cię usługę"}
            itemDescription={'W zgłoszeniu napisz informację, jakiego typu makijaż/kurs potrzebujesz'}
          />
        </div>
      </div>
    </LimitedWidthContent>
  );
};
