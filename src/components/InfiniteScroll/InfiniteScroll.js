import React, { useEffect } from "react";

const InfiniteScroll = ({ loadMore, children }) => {
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;

    loadMore();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{children}</>;
};

export default InfiniteScroll;
