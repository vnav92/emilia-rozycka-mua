import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";

import { ImageLink } from "../image-link";
import { getImageData } from "../../shared";

import * as styles from "./offer-grid.module.scss";

const DESKTOP_COLUMNS_NUMBER = 3;
const TABLET_COLUMNS_WRAPPER = 2;

const getCustomItemClassName = (offerItemsLength: number, index: number) => {
  if (
    offerItemsLength % DESKTOP_COLUMNS_NUMBER === 1 &&
    offerItemsLength - index === 1
  ) {
    return styles.desktopLastItem;
  } else if (
    offerItemsLength % DESKTOP_COLUMNS_NUMBER === 2 &&
    offerItemsLength - index <= 2
  ) {
    return styles.desktopTwoLastItems;
  } else if (
    offerItemsLength % TABLET_COLUMNS_WRAPPER === 1 &&
    offerItemsLength - index === 1
  ) {
    return styles.tabletLastItem;
  }
};

export const OfferGrid: React.FC = () => {
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
    <div className={styles.galleryWrapper}>
      {offerItems.map(({ title, image }, index) => (
        <ImageLink
          key={index}
          // TODO Add proper hrefs when dynamic slug handling will be ready
          to=""
          image={getImageData(image)}
          linkClassName={classNames(
            styles.offerLink,
            getCustomItemClassName(offerItems.length, index)
          )}
          imageClassName={styles.offerImage}
        >
          {title}
        </ImageLink>
      ))}
    </div>
  );
};
