import React from "react";
import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";

import {
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
} from "../../../components";
import { getImageData } from "../../../shared";
import { FaqItem } from "../../../components/faq-item/faq-item.component";

import * as styles from "./faq.module.scss";

type FaqProps = {
  sectionTitle: string;
  sectionDescription: string;
};

export const Faq: React.FC<FaqProps> = ({ sectionTitle }) => {
  const { allWpPage } = useStaticQuery(graphql`
    query FaqQuery {
      allWpPage(filter: { title: { eq: "offer" } }) {
        edges {
          node {
            offerDetails {
              fieldGroupName
              primarytitle
              secondarytitle
              faqsectiontitledarkbackgroundicon {
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
    <LimitedWidthContent
      className={classNames(styles.faqSection, styles.darkBackground)}
    >
      <SectionHeader
        as="h2"
        color={TypographyColor.LIGHT_PRIMARY}
        icon={getImageData(
          allWpPage.edges[0].node.offerDetails.faqsectiontitledarkbackgroundicon
        )}
      >
        {sectionTitle}
      </SectionHeader>

      <div className={styles.faqList}>
        {/* TODO add WP fetched content */}
        <FaqItem
          itemHeading={"Na jakim sprzęcie i materiałach pracujesz?"}
          itemDescription={
            "Pracuję zarówno na produktach profesjonalnych (Kryolan, Affect, Luxury) jak i selektywnych (Estee Lauder, Laura Mercier, Hourglass, Smashbox, Dior Backstage, Fenty Beauty). \n \nDbając o Wasze bezpieczeństwo stosuję jednorazowe akcesoria, takie jak aplikatory do rzęs i ust. W przypadku kremowych produktów stawiam na opakowania z pompką, a pozostałe z nich wykładam na zdezynfekowaną paletę, tak aby zapewnić Wam maksymalne wysoki poziom higieny w trakcie usługi."
          }
        />

        <FaqItem
          itemHeading={"Gdzie wykonujesz makijaże?"}
          itemDescription={
            "W dużej mierze pracuję z dojazdem do klienta. W ramach pakietów ślubnych dojeżdżam do swoich klientów głównie na terenie woj. pomorskiego, kujawsko-pomorskiego i warmińsko-mazurskiego. Sesje zdjęciowe oraz makijaże biznesowe, korporacyjne wykonuję w Trójmieście i okolicach. Na pojedyncze makijaże, lekcje makijażu i kursy zapraszam do mojej pracowni w Gdańsku Morena."
          }
        />

        <FaqItem
          itemHeading={"Czy możliwy jest dojazd do klientki? Jaki jest cennik?"}
          itemDescription={
            "W weekendy w sezonie ślubnym nie dojeżdżam do pojedynczych klientek. W takim przypadku zapraszam Cię do mojej pracowni w Gdańsku Morena. Dojazd możliwy jest w ramach pakietu ślubnego, o którym więcej przeczytasz w zakładce MAKIJAŻ ŚLUBNY. Jeśli masz jakieś wątpliwości lub nietypowe zlecenie dla mnie (szczególnie w dni robocze) - skontaktuj się ze mną!"
          }
          faqRedirectionLinkText={"Wyślij wiadomość"}
        />

        <FaqItem
          itemHeading={
            "Czy zajmujesz się również włosami? Jeśli nie - czy polecasz kogoś?"
          }
          itemDescription={
            "Makijaż to moja największa pasja i oddaję się jej w 200%. Swoje włosy w ważnym dla nas dniu lepiej oddać w ręce profesjonalnej stylistki fryzur. Gorąco polecam moje koleżanki i kolegów, pracujących na terenie Trójmiasta i okolic: Bartek Wysocki (Hairmate Gdańsk), Polka. Fryzury, warkocze., Masza Mikova."
          }
        />

        <FaqItem
          itemHeading={"Jak zapisać się na pojedynczą usługę?"}
          itemDescription={
            "Napisz proszę do mnie wiadomość na Facebooku/Instagramie lub wyślij maila z następującymi informacjami: jaka ilość i rodzaj usługi Cię interesuje, data i godzina usługi, w przypadku dojazdu - adres miejsca przygotowań. Po ustaleniu wszystkich szczegółów podsyłam dane do zadatku, który jest potwierdzeniem rezerwacji wybranego terminu."
          }
        />

        <FaqItem
          itemHeading={
            "Jestem przyszłą Panną Młodą. Czy mogę już zabookować termin na 2023 rok?"
          }
          itemDescription={
            "Aktualnie zapisy są otwarte do końca marca 2023. Na miesiące kwiecień - październik 2023 obowiązuje następujący harmonogram: 1 XI 2022 rozpoczynam zapisy na pakiety ślubne z dojazdem do klienta. 16 I 2023 rozpoczynam zapisy na makijaże indywidualne, które będą odbywać się w moim studio w Gdańsku Morena."
          }
        />

        <FaqItem
          itemHeading={"Jestem zdecydowana na pakiet ślubny! Co dalej?"}
          itemDescription={
            "Napisz do mnie! Po ustaleniu wszystkich szczegółów wysyłam Ci podsumowanie rezerwacji i umowę, którą podpisujemy on-line lub osobiście podczas makijażu próbnego. W razie jakichkolwiek pytań związanych z umową jestem cały czas do Twojej dyspozycji."
          }
          faqRedirectionLinkText={"Wyślij wiadomość"}
        />

        <FaqItem
          itemHeading={
            "Świetnie! W takim razie przyjdę na makijaż próbny. Czy mogę zabrać ze sobą moją świadkową / mamę / przyszłego męża?"
          }
          itemDescription={
            "W trosce o pozostałe klientki relaksujące się w lokalu, na każdy makijaż zapraszam Was bez osób towarzyszących. Swoje czworonogi i dzieci również zostawcie pod opieką w domu."
          }
        />

        <FaqItem
          itemHeading={"Jak przygotować się do makijażu?"}
          itemDescription={
            "Nie ma dobrego makijażu bez dobrej pielęgnacji :) Dlatego o skórę warto dbać regularnie i z odpowiednim wyprzedzeniem! Bardzo ważne jest codzienne nawilżanie twarzy i picie wody. Ewentualna wizyta na solarium/plaży powinna odbyć się najpóźniej dwa tygodnie przed makijażem. W przypadku aplikacji samoopalacza/opalania natryskowego polecam omijać okolice twarzy. \n \nOkoło 3 dni przed makijażem polecam wykonać przetestowany wcześniej peeling enzymatyczny. W przypadku osób depilujących brwi i wąsik - zabiegi te najlepiej wykonać najpóźniej 3 dni przed wizytą. W dniu umówionej wizyty najlepiej nie nakładać makijażu/filtru SPF lub wykonać dwuetapowe oczyszczanie twarzy i nałożyć pielęgnację bezpośrednio przed wizytą. Na makijaż proszę przyjść w koszulce na ramiączkach lub odpinanej koszuli. \n \nNa makijaż próbny ślubny najlepiej ubrać coś w kolorze docelowej kreacji. Polecam zabrać ze sobą biżuterię, przygotować zdjęcia swojego stroju, inspiracje makijażowe. Dobrym pomysłem jest umówienie się tego samego dnia na makijaż próbny, fryzurę próbną i/lub przymiarkę sukni ślubnej."
          }
        />
      </div>
    </LimitedWidthContent>
  );
};
