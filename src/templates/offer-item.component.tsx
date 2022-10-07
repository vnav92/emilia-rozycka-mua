import React from "react";

import { Layout } from "../components/layout";
import { SubpageHeading, OfferItemSection } from "../components";

const hasSection = (...args) => args.every(item => Boolean(item));

const OfferItem = ({ pageContext }) => (
  <Layout>
    <SubpageHeading
      isLightBackground={true}
      secondaryTitle={pageContext.secondarytitle}
      primaryTitle={pageContext.primarytitle}
    />
    <div>
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
    </div>
  </Layout>
);

export default OfferItem;
