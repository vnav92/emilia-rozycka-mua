import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, FutureBookings, Portfolio } from "../components";
import { OfferPrimaryScreen } from "../modules/offer/offer-primary-screen/offer-primary-screen.component";
import { Cooperation, OfferLinks, Reservations } from "../modules";

const Offer = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query OfferQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "icons" } } } }
        }
      ) {
        edges {
          node {
            icons {
              lightbackgroundoffersectionicon {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const { lightbackgroundoffersectionicon } = allWpPost.edges[0].node.icons;

  return (
    <Layout>
      <OfferPrimaryScreen />
      {/* TODO take sectionTitle and sectionDescription from WP */}
      <OfferLinks
        sectionTitleIcon={lightbackgroundoffersectionicon}
        sectionTitle="Lista usług"
        sectionDescription="Wybierz interesujący Cię typ makijażu, aby sprawdzić cennik."
      />
      <FutureBookings />
      <Cooperation 
        sectionTitleIcon={lightbackgroundoffersectionicon}
        sectionTitle="Współpraca"
        sectionDescription=""
      />
      <Reservations
        sectionTitleIcon={lightbackgroundoffersectionicon}
        sectionTitle="Rezerwacje"
        sectionDescription=""
      />
    </Layout>
  );
};

export default Offer;
