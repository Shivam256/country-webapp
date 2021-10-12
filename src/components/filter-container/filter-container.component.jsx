import React from "react";
import "./filter-container.styles.css";

//utils
import { FilterMap } from "../../utils/filter.utils";

//components
import Filter from "../filter/filter.component";

const FilterContainer = ({isMobile}) => {
  return (
    <div className={`filter-container ${isMobile?'filter-container-mobile':''}`}>
      <div className="header">Filters:</div>
      <div className="filter-section">
        {FilterMap.map((filterObj) => (
          <Filter filterObj={filterObj} key={filterObj.key} />
        ))}
      </div>
    </div>
  );
};
export default FilterContainer;
