import React from "react";

import { SubpageHeading } from "../../../components";
import { useStaticQuery, graphql } from "gatsby";

export const OfferPrimaryScreen = () => {
  const { allWpPage } = useStaticQuery(graphql`
    query OfferPrimaryScreenQuery {
      allWpPage(filter: { title: { eq: "offer" } }) {
        edges {
          node {
            offerDetails {
              primarytitle
              secondarytitle
            }
          }
        }
      }
    }
  `);

  const offerDetails = allWpPage.edges[0].node.offerDetails;

  return (
    <SubpageHeading
      primaryTitle={offerDetails.primarytitle}
      secondaryTitle={offerDetails.secondarytitle}
      backgroundVariant="gray"
    />
  );
};
