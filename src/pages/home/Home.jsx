import React from "react";

import Body from "./body/Body";
import FilterBar from "./filterBar/filterBar";

const Home = () => {
  return (
    <div className="flex">
      <div className="max-[570px]:hidden"> 
        {/* Mobile view for filter */}
      <FilterBar/>
      </div>
      <Body />
    </div>
  );
};

export default Home; 