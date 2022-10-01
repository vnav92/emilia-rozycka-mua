import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  PrimaryScreen,
  CompanyDescription,
  Offer,
  Portfolio,
  Reviews,
} from "../modules";

import { getImageData } from "../shared/utils";

import { Layout, FutureBookings } from "../components";

const IndexPage = () => {
  const { allWpPost } = useStaticQuery(graphql`
    query HomePageQuery {
      allWpPost(filter: { title: { eq: "home" } }) {
        edges {
          node {
            home {
              ownerjobtitle
              ownername
              primaryimage {
                mediaItemUrl
              }
              primarydescription
              secondarydescription
              bottomdescription
              bioredirectionlinktext
              bioredirectionlinkhref
              offersectiontitle
              offersectioninstruction
              offerprimarydescription
              offersubpageredirectionlinktext
              offersubpageredirectionlinkhref
              portfoliosectionicon {
                mediaItemUrl
                altText
              }
              portfoliosectiontitle
              portfoliotopphoto {
                mediaItemUrl
              }
              portfoliomiddlephoto {
                mediaItemUrl
                altText
              }
              portfoliobottomphoto {
                mediaItemUrl
                altText
              }
              portfoliodetailslinktext
              portfoliodetailslinkurl
              reviewssectionicon {
                mediaItemUrl
                altText
              }
              reviewssectiontitle
              reviewsdetailslinkurl
              reviewsdetailslinktext
            }
          }
        }
      }
    }
  `);

  const {
    ownerjobtitle,
    ownername,
    primaryimage,
    primarydescription,
    secondarydescription,
    bottomdescription,
    bioredirectionlinktext,
    bioredirectionlinkhref,
    offersectiontitle,
    offersectioninstruction,
    offerprimarydescription,
    offersubpageredirectionlinktext,
    offersubpageredirectionlinkhref,
    portfoliosectionicon,
    portfoliosectiontitle,
    portfoliotopphoto,
    portfoliomiddlephoto,
    portfoliobottomphoto,
    portfoliodetailslinktext,
    portfoliodetailslinkurl,
    reviewssectionicon,
    reviewssectiontitle,
    reviewsdetailslinktext,
    reviewsdetailslinkurl,
  } = allWpPost.edges[0].node.home;
  return (
    <Layout>
      <PrimaryScreen
        ownerJobTitle={ownerjobtitle}
        ownerName={ownername}
        primaryImage={getImageData(primaryimage)}
      />
      <CompanyDescription
        primaryDescription={primarydescription}
        secondaryDescription={secondarydescription}
        bottomDescription={bottomdescription}
        bioRedirectionLinkText={bioredirectionlinktext}
        bioRedirectionLinkHref={bioredirectionlinkhref}
      />
      <Offer
        sectionTitle={offersectiontitle}
        primaryDescription={offerprimarydescription}
        sectionInstruction={offersectioninstruction}
        detailsRedirectionLinkText={offersubpageredirectionlinktext}
        detailsRedirectionLinkHref={offersubpageredirectionlinkhref}
      />
      <Portfolio
        sectionTitle={portfoliosectiontitle}
        sectionTitleIcon={getImageData(portfoliosectionicon)}
        topImage={getImageData(portfoliotopphoto)}
        middleImage={getImageData(portfoliomiddlephoto)}
        bottomImage={getImageData(portfoliobottomphoto)}
        detailsLinkText={portfoliodetailslinktext}
        detailsLinkUrl={portfoliodetailslinkurl}
      />
      <Reviews
        sectionTitle={reviewssectiontitle}
        sectionTitleIcon={getImageData(reviewssectionicon)}
        detailsLinkText={reviewsdetailslinktext}
        detailsLinkUrl={reviewsdetailslinkurl}
      />
      <FutureBookings />
    </Layout>
  );
};

export default IndexPage;
