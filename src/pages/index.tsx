import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  PrimaryScreen,
  CompanyDescription,
  Offer,
  Portfolio,
} from "../modules";

import { getImageUrl } from "../shared/utils";

import { 
  Layout,
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
} from "../components";

import * as styles from "./index.module.scss";

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
              offerprimarydescription
              offersecondarydescription
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
    offerprimarydescription,
    offersecondarydescription,
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
        secondaryDescription={offersecondarydescription}
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
    </Layout>
  );
};

export default IndexPage;
