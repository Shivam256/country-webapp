import React ,{useState,useEffect} from "react";
import "./search-bar.styles.css";

import { ReactComponent as SearchIcon } from '../../assets/search.svg';

//components
import InputDropdown from "../input-dropdown/input-dropdown.component";

//redux
import {connect} from 'react-redux';
import { selectSelectedCountry } from "../../redux/country/country.selectors";
import {createStructuredSelector} from 'reselect';
import { setSelectedCountry } from "../../redux/country/country.actions";

const SearchBar = ({selectedCountry,setSelectedCountry}) => {
  const [countryName, setCountryName] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(()=>{
    if(countryName.length>0 && selectedCountry === null){
      setShowDropDown(true);
    }else{
      setShowDropDown(false);
    }


  },[countryName,selectedCountry])
  const handleChange = (e) =>{
    setCountryName(e.target.value);
    setSelectedCountry(null);

  }
  return (
    <div className="search-section">
      Search your country{" "}
      <div className="country-input">
        <SearchIcon className="search-icon" />
      <input type="text" placeholder="Search" onChange={handleChange} value={countryName} autoFocus/>
      </div>
      {showDropDown ? <InputDropdown filterVal={countryName} /> : null}
    </div>
  );
};


const mapStateToProps = createStructuredSelector({
  selectedCountry:selectSelectedCountry
})

const mapDispatchToProps = dispatch =>({
  setSelectedCountry:(a)=>dispatch(setSelectedCountry(a))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);
