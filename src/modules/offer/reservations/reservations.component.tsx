import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import ArrowIcon from "../../../../static/graphics/reservations/arrow-right-long.svg";

import {
  LimitedWidthContent,
  ReservationsItem,
  SectionHeader,
  TypographyColor,
} from "../../../components";
import { getImageData } from "../../../shared";

import * as styles from "./reservations.module.scss";

type ReservationsProps = {
  sectionTitle: string;
  sectionDescription: string;
};

export const Reservations: React.FC<ReservationsProps> = ({ sectionTitle }) => {
  const { allWpPage } = useStaticQuery(graphql`
    query ReservationsQuery {
      allWpPage(filter: { title: { eq: "offer" } }) {
        edges {
          node {
            id
            offerDetails {
              fieldGroupName
              primarytitle
              secondarytitle
              reservationssectiontitlelightbackgroundicon {
                altText
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);
  return (
    <LimitedWidthContent className={styles.reservationsSection}>
      <SectionHeader
        as="h2"
        color={TypographyColor.DARK_PRIMARY}
        icon={getImageData(
          allWpPage.edges[0].node.offerDetails
            .reservationssectiontitlelightbackgroundicon
        )}
      >
        {sectionTitle}
      </SectionHeader>

      <div className={styles.reservationsList}>
        {/* TODO fetch content from WP */}
        <ReservationsItem
          itemNumber={"1"}
          itemHeading={"Wybierz z oferty interesującą Cię usługę"}
          itemDescription={
            "W zgłoszeniu napisz informację, jakiego typu makijaż/kurs potrzebujesz"
          }
        />

        <img
          src={ArrowIcon}
          alt={"arrow pointing right"}
          className={styles.arrowImg}
        />

        <ReservationsItem
          itemNumber={"2"}
          itemHeading={"Napisz do mnie wiadomość z proponowanym terminem"}
          itemDescription={
            "Zaproponuj datę i godzinę naszego spotkania, mając na względzie czas trwania usługi"
          }
          reservationsRedirectionLinkText={"Wyślij wiadomość"}
        />

        <img
          src={ArrowIcon}
          alt={"arrow pointing right"}
          className={styles.arrowImg}
        />

        <ReservationsItem
          itemNumber={"3"}
          itemHeading={"Omówmy szczegóły makijażu i potwierdźmy wizytę"}
          itemDescription={
            "W przypadku większości usług potwierdzeniem rezerwacji jest wpłacenie zadatku"
          }
        />
      </div>
    </LimitedWidthContent>
  );
};
