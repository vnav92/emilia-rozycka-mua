import React from "react";
import classNames from "classnames";

import {
  LimitedWidthContent,
  SectionHeader,
  TypographyColor,
} from "../../../components";

import * as styles from "./faq.module.scss";
import { FaqItem } from "../../../components/faq-item/faq-item.component";

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
          <FaqItem
            itemHeading={'Na jakim sprzęcie i materiałach pracujesz?'}
            itemDescription={'Pracuję zarówno na produktach profesjonalnych (Kryolan, Affect, Luxury) jak i selektywnych (Estee Lauder, Laura Mercier, Hourglass, Smashbox, Dior Backstage, Fenty Beauty). Dbając o Wasze bezpieczeństwo stosuję jednorazowe akcesoria, takie jak aplikatory do rzęs i ust. W przypadku kremowych produktów stawiam na opakowania z pompką, a pozostałe z nich wykładam na zdezynfekowaną paletę, tak aby zapewnić Wam maksymalne wysoki poziom higieny w trakcie usługi.'}
          />
        </div>
    </LimitedWidthContent>
  );
};
