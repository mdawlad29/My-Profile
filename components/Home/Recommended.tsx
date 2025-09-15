import React from "react";
import { LatestArticle } from "./LatestArticle";
import { Features } from "./Features";
import { LetsContent } from "./LetsContent";

const Recommended = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      <LatestArticle />
      <Features />
      <LetsContent />
    </div>
  );
};

export default Recommended;
