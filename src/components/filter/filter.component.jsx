import React, { useState,useEffect } from "react";
import "./filter.styles.css";

//libs
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

//utils
import { filterByContinent } from "../../utils/filter.utils";

//redux
import {connect} from 'react-redux';
import {setCountryFilters} from '../../redux/country/country.actions';
import {selectCurrentCountries} from '../../redux/country/country.selectors';
import {createStructuredSelector} from 'reselect';


const Filter = ({ filterObj ,setCountryFilters}) => {
  const { name, options } = filterObj;

  const [filterOption, setFilteOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [countries,setCountries] = useState(currentCountries);

  const handleClick = () =>{
    setShowDropdown(!showDropdown);
  }

  const handleMouseEnter = (e) =>{
    e.target.style.backgroundColor = '#0b0911';
    setFilteOption(e.target.textContent);
  }

  const handleMouseLeave = (e) =>{
    // e.target.style.backgroundColor = '#0b0911';
    e.target.style.backgroundColor = '#0f0e12';
  }

  const handleOptionClick = (e) =>{
    setFilteOption(e.target.textContent);
    setShowDropdown(false);

    setCountryFilters({name,value:e.target.textContent});


  }

  return (
    <div className="filter">
      {name}
      <div className="filter-dropdown-header" onClick={handleClick}>
        {" "}
        <div className="filter-header" >
          {filterOption === null ? `Select ${name}` : filterOption}
        </div>{" "}
        <ArrowDropDownIcon className={`dropdown-icon ${showDropdown?'dropdown-icon-rotated':''}`} />
      </div>
      {showDropdown ? (
        <div className="filter-dropdown">
          {options.map((option) => (
            <div className="filter-option" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOptionClick} key={option}>{option}</div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCountries:selectCurrentCountries

})

const maoDispatchToProps = dispatch => ({
  setCountryFilters:(obj)=>dispatch(setCountryFilters(obj))
})
export default connect(mapStateToProps,maoDispatchToProps)(Filter);
