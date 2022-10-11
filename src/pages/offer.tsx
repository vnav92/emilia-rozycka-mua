import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Layout, FutureBookings } from "../components";
import { OfferPrimaryScreen } from "../modules/offer/offer-primary-screen/offer-primary-screen.component";
import { Cooperation, Faq, OfferLinks, Reservations } from "../modules";

import FaqSectionIcon from "../../static/graphics/faq/icon-section-faq.svg";
import ReservationsSectionIcon from "../../static/graphics/reservations/icon-section-reservations-calendar.svg";
import CooperationSectionIcon from "../../static/graphics/cooperation/icon-section-cooperation.svg";

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
      <Cooperation 
        sectionTitleIcon={CooperationSectionIcon}
        sectionTitle="Współpraca"
        sectionDescription=""
      />
      <Reservations
        sectionTitleIcon={ReservationsSectionIcon}
        sectionTitle="Rezerwacje"
        sectionDescription=""
      />
      <Faq
        sectionTitleIcon={FaqSectionIcon}
        sectionTitle="FAQ"
        sectionDescription=""
      />
      <FutureBookings />
    </Layout>
  );
};

export default Offer;
