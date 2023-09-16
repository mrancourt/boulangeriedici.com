import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({exceptPrefixes}) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (exceptPrefixes.some(prefix => pathname.startsWith("/" + prefix))) {
      return;
    }
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

ScrollToTop.defaultProps = {
  exceptPrefixes: []
}
