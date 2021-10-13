import React, { useState, useEffect } from "react";
import "./App.css";

//components
import Navbar from "./components/navbar/navbar.component";
import FilterContainer from "./components/filter-container/filter-container.component";
import CountryPreview from "./components/country-preview/country-preview.component";
import InputDropdown from "./components/input-dropdown/input-dropdown.component";
import SearchBar from "./components/search-bar/search-bar.component";
//libs

import { Button, Grid, CircularProgress } from "@mui/material";

//redux
import { setCurrentCountries } from "./redux/country/country.actions";
import { connect } from "react-redux";
import {
  selectCurrentCountries,
  selectSelectedCountry,
} from "./redux/country/country.selectors";
import { createStructuredSelector } from "reselect";

//utils
import { getCountryData } from "./utils/country.utils";

const App = ({ setCurrentCountries, currentCountries, selectedCountry }) => {
  const [device, setDevice] = useState("desktop");
  const width = window.innerWidth;
  const [countries, setCountries] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setCountries(getCountryData());
    setCurrentCountries(getCountryData());

    // console.log(width);
    if (width < 800) {
      setDevice("mobile");
    }
  }, [width]);

  useEffect(() => {
    setCountries(currentCountries);
    // console.log("i am rendered");
  }, [currentCountries]);

  useEffect(() => {
    if (showFilters) {
      document.querySelector(".country-data").style.filter = "brightness(50%)";
    } else {
      document.querySelector(".country-data").style.filter = "brightness(100%)";
    }
  }, [showFilters]);

  const handleFilterClick = () => {
    if (device === "mobile") {
      setShowFilters(!showFilters);
    }
  };

  return (
    <div className="App">
      <Navbar />

      <div className="country-section">
        {device === "desktop" ? (
          <FilterContainer />
        ) : (
          <Button variant="contained" onClick={handleFilterClick}>
            {showFilters ? "CLOSE FILTERS" : "SHOW FILTERS"}
          </Button>
        )}
        {showFilters ? <FilterContainer isMobile={true} /> : null}
        <div className="country-data">
          <SearchBar />
          <div className="country-list">
            <div className="country-list-inner">
              <Grid container spacing={0} className="header-grid">
                <Grid item xs={2} className="country-list-headers">
                  Country
                </Grid>
                <Grid item xs={1} className="country-list-headers">
                  Code
                </Grid>
                <Grid item xs={2} className="country-list-headers">
                  Capital
                </Grid>
                <Grid item xs={3} className="country-list-headers">
                  Population (ppl)
                </Grid>
                <Grid item xs={2} className="country-list-headers">
                  Religion
                </Grid>
                <Grid item xs={2} className="country-list-headers">
                  Continent
                </Grid>
              </Grid>
              <div className="counties-container">
                {countries === null || countries == undefined ? (
                  <CircularProgress className="loader" />
                ) : (
                  <div>
                    {selectedCountry ? (
                      <CountryPreview
                        country={selectedCountry}
                        key={selectedCountry.name}
                        isSelected={true}
                      />
                    ) : null}
                    {countries.map((country) => (
                      <CountryPreview country={country} key={country.name} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentCountries: selectCurrentCountries,
  selectedCountry: selectSelectedCountry,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentCountries: (countries) => dispatch(setCurrentCountries(countries)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
