import { getCountryData } from "./country.utils";

// const populaitonArr = [
//     10000, 100000, 10000000, 100000000, 50000000, 100000000, 100000000,
//   ],

const populationMap = {
  "0-10,000": [0,10000],
  "10,000-1 lakh": [10000,100000],
  "1 lakh - 1 crore": [100000,10000000],
  "1 crore - 10 crore": [10000000,100000000],
  "10 crore - 50 crore": [100000000,500000000],
  "50 crore - 100 crore": [500000000,1000000000],
  "100 crore +": [1000000000,10000000000],
};

export const FilterMap = [
  {
    name: "Continent",
    options: [
      "Asia",
      "Europe",
      "Africa",
      "North America",
      "South America",
      "Oceania",
      "Antartica",
    ],
    key: 1,
  },
  {
    name: "Religion",
    options: [
      "Islam",
      "Christianity",
      "Hinduism",
      "Buddhism",
      "Unaffiliated Religions",
      "Folk Religions",
    ],
    key: 2,
  },
  {
    name: "Population",
    options: [
      "0-10,000",
      "10,000-1 lakh",
      "1 lakh - 1 crore",
      "1 crore - 10 crore",
      "10 crore - 50 crore",
      "50 crore - 100 crore",
      "100 crore +",
    ],

    key: 3,
  },
  {
    name:"Region",
    options:[
      "Southern and Central Asia",
      "Northern Africa",
      "Polynesia",
      "Southern Europe",
      "Central Africa",
      "Caribbean",
      "Antarctica",
      "South America",
      "Middle East",
      "Australia and New Zealand",
      "Western Europe",
      "Eastern Europe",
      "Central America",
      "Southeast Asia",
      "Eastern Asia"

    ],
    key:4
  }
];

const allCountries = getCountryData();

export const filterCountries = (filterOptions) => {
  let countries = [...allCountries];
  // console.log("i am called!");
  // console.log(filterOptions);
  const latestFilters = [];

  const optionsMap = {
    Continent: 0,
    Religion: 0,
    Population: 0,
    Region:0
  };

  filterOptions.reverse().forEach((ft) => {
    if (optionsMap[ft.name] == 0) {
      latestFilters.push(ft);
      optionsMap[ft.name]++;
    }
  });

  latestFilters.forEach((filterOption) => {
    if (filterOption.name !== "Population") {
      // console.log(filterOption);
      countries = countries.filter(
        (country) =>
          country[filterOption.name.toLowerCase()] === filterOption.value
      );
    }else{
        // console.log(filterOption.value);
        let [minPop,maxPop] = populationMap[filterOption.value];
        // console.log("here",minPop,maxPop);

        countries = countries.filter(country => (country.population >= minPop && country.population <= maxPop));
    }
  });
  // console.log(countries);
  return countries;
};
