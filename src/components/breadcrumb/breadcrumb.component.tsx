import React from "react";
import { useLocation, Link } from "@reach/router";

import * as styles from "./breadcrumb.module.scss";

type BreadCrumbProps = {
  lastItemTitle: string;
};

const LINKS_SEPARATOR = "/";

// Initial version of breadcrumb which applies only to offer-item
// Will be improved if needed
export const Breadcrumb: React.FC<BreadCrumbProps> = ({ lastItemTitle }) => {
  const { pathname } = useLocation();

  return (
    <div className={styles.breadcrumbWrapper}>
      <Link to="/">Home</Link>
      <span>{LINKS_SEPARATOR}</span>
      <Link to="/offer">Oferta</Link>
      <span>{LINKS_SEPARATOR}</span>
      <Link to={pathname}>{lastItemTitle}</Link>
    </div>
  );
};
