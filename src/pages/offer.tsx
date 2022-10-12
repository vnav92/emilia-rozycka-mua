import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, FutureBookings, CtaQuestions } from "../components";
import { OfferPrimaryScreen } from "../modules/offer/offer-primary-screen/offer-primary-screen.component";
import { Cooperation, Faq, OfferLinks, Reservations } from "../modules";

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
      <CtaQuestions />
      <Cooperation sectionTitle="Współpraca" sectionDescription="" />
      <Reservations sectionTitle="Rezerwacje" sectionDescription="" />
      <Faq sectionTitle="FAQ" sectionDescription="" />
      <FutureBookings />
    </Layout>
  );
};

export default Offer;
