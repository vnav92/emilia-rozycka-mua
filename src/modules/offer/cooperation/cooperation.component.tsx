import React from "react";

import cosmeticsIcon from "../../../../static/graphics/cooperation/cosmetics.svg";
import chairIcon from "../../../../static/graphics/cooperation/director-chair.svg";
import sanitizerIcon from "../../../../static/graphics/cooperation/sanitizer.svg";
import weddingLocationIcon from "../../../../static/graphics/cooperation/wedding-location.svg";

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

        <div className={styles.cooperationList}>
            <CooperationItem
                itemTitleIcon={cosmeticsIcon}
                itemDescription={'Pracuję na produktach profesjonalnych (Kryolan, Affect, Luxury, Clare Blanc) i selektywnych (Estee Lauder, Dior Backstage, Hourglass, Smashbox, Fenty Beauty)'}
            />
            <CooperationItem
                itemTitleIcon={sanitizerIcon}
                itemDescription={'Dbam o wysoką higienę pracy. Używane przeze mnie pędzle i narzędzia są dezynfekowane, a do aplikacji tuszu i pomadek używam jednorazowych aplikatorów'}
            />
            <CooperationItem
                itemTitleIcon={weddingLocationIcon}
                itemDescription={'Dojeżdżam do klientów na terenie Trójmiasta i okolic przy zakupie pakietu ślubnego, zleceniach komercyjnych i biznesowych'}
            />
            <CooperationItem
                itemTitleIcon={chairIcon}
                itemDescription={'Makijaże, kursy i lekcje makijażu dla osób prywatnych odbywają się w moim studio w Gdańsku'}
            />
        </div>
      </div>
    </LimitedWidthContent>
  );
};
