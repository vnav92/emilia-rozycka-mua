import React from "react";

import {
  TypographyColor,
  TypographyWidth,
  Typography,
  TypographyFontFamily,
  RedirectionLink,
} from "..";

import * as styles from "./cooperation-item.module.scss";

type CooperationItemProps = {
  itemDescription: string;
  itemTitleIcon: React.ReactNode;
  cooperationRedirectionLinkHref?: string;
  cooperationRedirectionLinkText?: string;
};

export const CooperationItem: React.FC<CooperationItemProps> = ({
  itemTitleIcon,
  itemDescription,
  cooperationRedirectionLinkHref,
  cooperationRedirectionLinkText,
}) => {
  return (
    <div className={styles.cooperationItemWrapper}>
      <img src={itemTitleIcon} alt="" />
      <div className={styles.textBlock}>
        <Typography
          as="p"
          fontFamily={TypographyFontFamily.SECONDARY}
          color={TypographyColor.DARK_PRIMARY}
          className={styles.itemDescriptionText}
        >
          {itemDescription}
        </Typography>

        {cooperationRedirectionLinkHref && (
          <RedirectionLink
            href={cooperationRedirectionLinkHref}
            className={styles.itemLink}
          >
            {cooperationRedirectionLinkText}
          </RedirectionLink>
        )}
      </div>
    </div>
  );
};
