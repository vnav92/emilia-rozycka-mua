import { useEffect } from "react";

export const useOnClickOutside = (navbarRef, triggerRef, handler) => {
  useEffect(() => {
    const listener = (event) => {

      if ((navbarRef?.current?.contains(event.target)) || (triggerRef?.current?.contains(event.target))) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [navbarRef, triggerRef, handler]);
};
