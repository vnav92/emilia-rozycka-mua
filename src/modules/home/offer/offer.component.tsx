import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from 'classnames';
import {
  LimitedWidthContent,
  SectionHeader,
  Typography,
  RedirectionLink,
  ImageLink,
} from "../../../components";
import { getImageUrl } from "../../../shared/utils";

import * as styles from "./offer.module.scss";

type OfferProps = {
  sectionTitle: React.ReactNode;
  sectionTitleIconUrl: string;
  primaryDescription: React.ReactNode;
  sectionInstruction: React.ReactNode;
  detailsRedirectionLinkText: React.ReactNode;
  detailsRedirectionLinkHref: React.ReactNode;
};

const desktopColumnsNumber = 3;
const tabletColumnsNumber = 2;

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

  const getCustomItemClassName = (index) => {
    if (offerItems.length % desktopColumnsNumber === 1 && offerItems.length - index === 1) {
      return styles.desktopLastItem
    } else if (offerItems.length % desktopColumnsNumber === 2 && offerItems.length - index <= 2) {
      return styles.desktopTwoLastItems
    } else if (offerItems.length % tabletColumnsNumber === 1 && offerItems.length - index === 1) {
      return styles.tabletLastItem;
    }
  }

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
              linkClassName={classNames(styles.offerLink, getCustomItemClassName(index))}
              imageClassName={classNames(
                styles.offerImage,
              )}
            >
              {title}
            </ImageLink>
          ))}
        </div>
      </div>
    </LimitedWidthContent>
  );
};
