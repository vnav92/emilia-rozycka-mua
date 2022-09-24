import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  PrimaryScreen,
  CompanyDescription,
  Offer,
  Portfolio,
  Reviews,
  FutureBookings,
} from "../modules";

import { getImageData } from "../shared/utils";

import { Layout } from "../components";

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
              offersectionicon {
                mediaItemUrl
                altText
              }
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
              futurebookingslinetwo
              futurebookingslineone
              futurebookingslinethree
              futurebookingslinktext
              futurebookingsbackgroundimage {
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
    offersectionicon,
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
    futurebookingslinetwo,
    futurebookingslineone,
    futurebookingslinethree,
    futurebookingslinktext,
    futurebookingsbackgroundimage,
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
        sectionTitleIcon={getImageData(offersectionicon)}
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
      <FutureBookings
        lineOne={futurebookingslineone}
        lineTwo={futurebookingslinetwo}
        lineThree={futurebookingslinethree}
        linkText={futurebookingslinktext}
        backgroundImage={getImageData(futurebookingsbackgroundimage)}
      />
    </Layout>
  );
};

export default IndexPage;
