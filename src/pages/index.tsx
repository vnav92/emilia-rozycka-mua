import * as React from "react";

import {
  Layout,
  LimitedWidthContent,
  Typography,
  TypographyFontFamily,
  Button,
} from "../components";
import { PrimaryScreen, CompanyDescription } from "../modules";

import { useStaticQuery, graphql } from "gatsby";

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
  } = allWpPost.edges[0].node.home;
  return (
    <Layout>
      <PrimaryScreen
        ownerJobTitle={ownerjobtitle}
        ownerName={ownername}
        primaryImageUrl={primaryimage.mediaItemUrl}
      />
      <CompanyDescription
        primaryDescription={primarydescription}
        secondaryDescription={secondarydescription}
        bottomDescription={bottomdescription}
        bioRedirectionLinkText={bioredirectionlinktext}
        bioRedirectionLinkHref={bioredirectionlinkhref}
      />
    </Layout>
  );
};

export default IndexPage;
