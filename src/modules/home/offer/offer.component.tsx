import React, { useSyncExternalStore } from "react";
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
  sectionInstruction: React.ReactNode;
  detailsRedirectionLinkText: React.ReactNode;
  detailsRedirectionLinkHref: React.ReactNode;
};

export const Offer: React.FC<OfferProps> = ({
  sectionTitle,
  sectionTitleIconUrl,
  primaryDescription,
  sectionInstruction,
  detailsRedirectionLinkText,
  detailsRedirectionLinkHref,
}) => {
  const { allWpPost } = useStaticQuery(graphql`
    query MyQuery {
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
      <div className={styles.topSection}>
        <SectionHeader
          as="h3"
          iconUrl={sectionTitleIconUrl}
          className={styles.sectionHeader}
        >
          {sectionTitle}
        </SectionHeader>
        <div className={styles.descriptionSection}>
          <Typography as="p" className={styles.description}>
            {primaryDescription}
          </Typography>
          <RedirectionLink to={detailsRedirectionLinkHref}>
            {detailsRedirectionLinkText}
          </RedirectionLink>
        </div>
      </div>
      <Typography className={styles.sectionInstruction}>
        {sectionInstruction}
      </Typography>
      <div className={styles.contentWrapper}>
        <div className={styles.galleryWrapper}>
          {offerItems.map(({ title, image }, index) => (
            <ImageLink
              key={index}
              to=""
              imageUrl={getImageUrl(image)}
              imageClassName={styles.offerImage}
            >
              {title}
            </ImageLink>
          ))}
        </div>
      </div>
    </LimitedWidthContent>
  );
};
