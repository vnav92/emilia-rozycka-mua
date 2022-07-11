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

import { getImageUrl } from "../shared/utils";

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
              }
              portfoliosectionicon {
                mediaItemUrl
              }
              portfoliosectiontitle
              portfoliotopphoto {
                mediaItemUrl
              }
              portfoliomiddlephoto {
                mediaItemUrl
              }
              portfoliobottomphoto {
                mediaItemUrl
              }
              portfoliodetailslinktext
              portfoliodetailslinkurl
              reviewssectionicon {
                mediaItemUrl
              }
              reviewssectiontitle
              reviewsdetailslinkurl
              reviewsdetailslinktext
              futurebookingslinetwo
              futurebookingslineone
              futurebookingslinethree
              futurebookingslinktext
              futurebookingslinkurl
              futurebookingsbackgroundimage {
                mediaItemUrl
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
    futurebookingslinkurl,
    futurebookingsbackgroundimage,
  } = allWpPost.edges[0].node.home;
  return (
    <Layout>
      <PrimaryScreen
        ownerJobTitle={ownerjobtitle}
        ownerName={ownername}
        primaryImageUrl={getImageUrl(primaryimage)}
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
        sectionTitleIconUrl={getImageUrl(offersectionicon)}
        primaryDescription={offerprimarydescription}
        sectionInstruction={offersectioninstruction}
        detailsRedirectionLinkText={offersubpageredirectionlinktext}
        detailsRedirectionLinkHref={offersubpageredirectionlinkhref}
      />
      <Portfolio
        sectionTitle={portfoliosectiontitle}
        sectionTitleIconUrl={getImageUrl(portfoliosectionicon)}
        topImageUrl={getImageUrl(portfoliotopphoto)}
        middleImageUrl={getImageUrl(portfoliomiddlephoto)}
        bottomImageUrl={getImageUrl(portfoliobottomphoto)}
        detailsLinkText={portfoliodetailslinktext}
        detailtLinkUrl={portfoliodetailslinkurl}
      />
      <Reviews
        sectionTitle={reviewssectiontitle}
        sectionTitleIconUrl={getImageUrl(reviewssectionicon)}
        detailsLinkText={reviewsdetailslinktext}
        detailsLinkUrl={reviewsdetailslinkurl}
      />
      <FutureBookings
        lineOne={futurebookingslineone}
        lineTwo={futurebookingslinetwo}
        lineThree={futurebookingslinethree}
        linkText={futurebookingslinktext}
        linkUrl={futurebookingslinkurl}
        backgroundImageUrl={getImageUrl(futurebookingsbackgroundimage)}
      />
    </Layout>
  );
};

export default IndexPage;
