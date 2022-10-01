import React from "react";
import { Layout, FutureBookings } from "../components";
import { OfferPrimaryScreen } from "../modules/offer/offer-primary-screen/offer-primary-screen.component";
import { OfferLinks } from "../modules";
import { useStaticQuery, graphql } from "gatsby";

const Offer = () => {
  const { allWpPost } = useStaticQuery(graphql`
  query OfferPageQuery {
    allWpPost(filter: { title: { eq: "home" } }) {
      edges {
        node {
          home {
            offersectionicon {
              mediaItemUrl
              altText
            }
          }
        }
      }
    }
  }
`);

const {
  offersectionicon,
} = allWpPost.edges[0].node.home;

  return (
    <Layout>
      <OfferPrimaryScreen />
      {/* TODO take sectionTitle and sectionDescription from WP */}
      <OfferLinks
        sectionTitleIcon={offersectionicon}
        sectionTitle="Lista usług"
        sectionDescription="Wybierz interesujący Cię typ makijarzu, aby sprawdzić cennik."
      />
      <FutureBookings/>
    </Layout>
  );
};

export default Offer;
