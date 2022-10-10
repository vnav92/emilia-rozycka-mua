import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import classNames from "classnames";

import * as styles from "./navbar-wrapper.module.scss";
import { useIsOnHomePage, getImageData } from "../../shared";

type NavbarWrapperProps = {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
};

export const NavbarWrapper: React.FC<NavbarWrapperProps> = ({
  className,
  children,
}) => {
  const isOnHomePage = useIsOnHomePage();
  const { allWpPost } = useStaticQuery(graphql`
    query NavbarWrapperQuery {
      allWpPost(filter: { title: { eq: "icons" } }) {
        edges {
          node {
            icons {
              darkbackgroundsimplelogo {
                mediaItemUrl
                altText
              }
              lightbackgroundsimplelogo {
                mediaItemUrl
                altText
              }
            }
          }
        }
      }
    }
  `);

  const { darkbackgroundsimplelogo, lightbackgroundsimplelogo } =
    allWpPost.edges[0].node.icons;
  const logo = getImageData(
    isOnHomePage ? darkbackgroundsimplelogo : lightbackgroundsimplelogo
  );

  return (
    <nav
      className={classNames(
        styles.navbarWrapper,
        isOnHomePage
          ? styles.darkBackgroundWrapper
          : styles.lightBackgroundWrapper,
        className
      )}
    >
      <Link to="/">
        {logo && <img src={logo.mediaItemUrl} alt={logo.altText} className={styles.logoImg} />}
      </Link>
      {children}
    </nav>
  );
};
