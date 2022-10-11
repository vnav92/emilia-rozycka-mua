import React from "react";

import { Layout } from "../components/layout";
import {
  SubpageHeading,
  OfferItemSection,
  Portfolio,
  FutureBookings,
  Breadcrumb,
} from "../components";

import * as styles from "./offer-item.module.scss";

const hasSection = (...args) => args.every(item => Boolean(item));

const OfferItem = ({ pageContext }) => (
  <Layout>
    <SubpageHeading
      backgroundVariant="light"
      secondaryTitle={pageContext.secondarytitle}
      primaryTitle={pageContext.primarytitle}
      breadcrumbElement={
        <Breadcrumb
          lastItemTitle={pageContext.primarytitle}
          className={styles.breadcrumbElement}
        />
      }
    />
    <div
      style={{
        backgroundImage: `url('${pageContext.image.mediaItemUrl}')`,
      }}
      className={styles.offerImageWrapper}
    ></div>
    <div className={styles.offerItemsWrapper}>
      <OfferItemSection
        title={pageContext.firstitemtitle}
        content={pageContext.firstitemcontent}
        price={pageContext.firstitemprice}
      />
      {hasSection(
        pageContext.seconditemtitle,
        pageContext.seconditemcontent,
        pageContext.seconditemprice
      ) && (
        <OfferItemSection
          title={pageContext.seconditemtitle}
          content={pageContext.seconditemcontent}
          price={pageContext.seconditemprice}
        />
      )}
      {hasSection(
        pageContext.thirditemtitle,
        pageContext.thirditemcontent,
        pageContext.thirditemprice
      ) && (
        <OfferItemSection
          title={pageContext.thirditemtitle}
          content={pageContext.thirditemcontent}
          price={pageContext.thirditemprice}
        />
      )}
      <Portfolio isLightBackground={true} />
      <FutureBookings />
    </div>
  </Layout>
);

export default OfferItem;
