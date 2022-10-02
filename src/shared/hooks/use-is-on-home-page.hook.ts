import { useLocation } from "@reach/router";

export const useIsOnHomePage = () => {
  const { pathname } = useLocation();

  return pathname === "/";
};
