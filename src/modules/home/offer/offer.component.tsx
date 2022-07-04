import React from "react";
import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  RedirectionLink,
  ImageLink,
} from "../../../components";

import { useStaticQuery, graphql } from "gatsby";

import * as styles from "./offer.module.scss";
import { getImageUrl } from "../../../shared/utils";

type OfferProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIconUrl: string;
  primaryDescription: React.ReactNode;
  secondaryDescription: React.ReactNode;
  detailsRedirectionLinkText: React.ReactNode;
  detailsRedirectionLinkHref: React.ReactNode;
};

export const Offer: React.FC<OfferProps> = ({
  sectionTitle,
  sectionTitleIconUrl,
  primaryDescription,
  secondaryDescription,
  detailsRedirectionLinkText,
  detailsRedirectionLinkHref,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query OfferQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "offer-item" } } } }
        }
      ) {
        edges {
          node {
            offerItem {
              title
              image {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
  `);

  const offerItems = allWpPost.edges.map(({ node }) => node.offerItem);

  return (
    <LimitedWidthContent className={styles.offerSection}>
      <SectionHeader as="h3" iconUrl={sectionTitleIconUrl}>
        {sectionTitle}
      </SectionHeader>
      <div className={styles.contentWrapper}>
        <div>
          <Typography as="p" className={styles.description}>
            {primaryDescription}
          </Typography>
          <Typography as="p" className={styles.description}>
            {secondaryDescription}
          </Typography>
          <RedirectionLink to={detailsRedirectionLinkHref}>
            {detailsRedirectionLinkText}
          </RedirectionLink>
        </div>
        <div className={styles.galleryWrapper}>
          {offerItems.map(({ title, image }, index) => (
            <div>
              <ImageLink
                key={index}
                to=""
                imageUrl={getImageUrl(image)}
                imageClassName={styles.offerImage}
              >
                {title}
              </ImageLink>
            </div>
          ))}
        </div>
      </div>
    </LimitedWidthContent>
  );
};
