import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, FutureBookings } from "../components";
import { OfferPrimaryScreen } from "../modules/offer/offer-primary-screen/offer-primary-screen.component";
import { OfferLinks } from "../modules";

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
    </Layout>
  );
};

export default Offer;
