import React from "react";

import { Layout } from '../components/layout';
import { SubpageHeading } from "../components";

const OfferItem = ({ pageContext }) => {
  return (
    <Layout>
      <SubpageHeading isLightBackground={true} secondaryTitle={pageContext.secondarytitle} primaryTitle={pageContext.primarytitle}/>
    </Layout>
  )
};

export default OfferItem;
