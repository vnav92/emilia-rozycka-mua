import React from "react";
import ArrowIcon from "../../../../static/graphics/reservations/arrow-right-long.svg";

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

          <img 
            src={ArrowIcon} 
            alt={'arrow pointing right'} 
            className={styles.arrowImg}
          />

          <ReservationsItem 
            itemNumber={"2"}
            itemHeading={"Napisz do mnie wiadomość z proponowanym terminem"}
            itemDescription={'Zaproponuj datę i godzinę naszego spotkania, mając na względzie czas trwania usługi'}
          />

          <img 
            src={ArrowIcon} 
            alt={'arrow pointing right'} 
            className={styles.arrowImg}
          />
          
          <ReservationsItem 
            itemNumber={"3"}
            itemHeading={"Omówmy szczegóły makijażu i potwierdźmy wizytę"}
            itemDescription={'W przypadku większości usług potwierdzeniem rezerwacji jest wpłacenie zadatku'}
          />
        </div>
    </LimitedWidthContent>
  );
};
