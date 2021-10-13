
import CountryActionTypes from "./country.types";
import { filterCountries } from "../../utils/filter.utils";

const INITIAL_STATE = {
  currentCountries: null,
  selectedCountry: null,
  countryFilters:[]
};

const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryActionTypes.SET_CURRENT_COUNTRIES:
        // console.log(action.payload);
      return {
        ...state,
        currentCountries: action.payload,
      };
    case CountryActionTypes.SET_SELECTED_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    case CountryActionTypes.SET_COUNTRY_FILTERS:
      return {
        ...state,
        countryFilters:[...state.countryFilters,action.payload],
        currentCountries:filterCountries([...state.countryFilters,action.payload])
      }  
    default:
      return state;
  }
};

export default countryReducer;
