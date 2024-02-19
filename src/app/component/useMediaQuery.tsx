import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [Match, setMatch] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [query]);
  return Match;
};

export default useMediaQuery;
