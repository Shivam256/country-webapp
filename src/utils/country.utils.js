import CountryNames from "../country.data/country-by-name.json";
import Codes from "../country.data/country-by-calling-code.json";
import Capitals from "../country.data/country-by-capital-city.json";
import Population from '../country.data/country-by-population.json';
import Religion from "../country.data/country-by-religion.json";
import Continent from "../country.data/country-by-continent.json";
import Flag from '../country.data/country-by-flag.json';
import Region from '../country.data/country-by-region-in-world.json';

// const checkIfImageExist = (url,cb) =>{
//     const img = new Image();

//     img.src = url;

//     if(img.complete){
//         cb(true);
//     }
//     else{
//         img.onload = () => {cb(true)}
//     }

//     img.onerror = () => {
//         cb(false);
//     }


// }

const getCountryCode = (name) =>{
    const d = Codes.find(e => e.country === name);
    if(d === undefined){
        return "--";
    }
    return d.calling_code;

}

const getCountryCapitail = (name) =>{
    const d = Capitals.find(e => e.country === name);
    if(d === undefined){
        return "--";
    }
    if(d.city == null){
        return '- -';
    }
    return d.city;
    
}

const getCountryPopulation = (name) =>{
    const d = Population.find(e => e.country === name);
    if(d === undefined){
        return '- -';
    }
    
    return d.population;
}


const getCoutryReligion = (name) =>{
    const d = Religion.find(e => e.country === name);
    if(d === undefined){
        return '- -';
    }
    return d.religion;
}

const getCountryContinent = (name) =>{
    const d = Continent.find(e => e.country === name);
    if(d === undefined){
        return '- -';
    }
    return d.continent;
}

const getCOuntryFlag = (name) =>{
    const d = Flag.find(e => e.country === name);
    if(d === undefined){
        return '- -';
    }
    return d.flag_base64;

}


export const getCountryRegion = (name) =>{
    const d = Region.find(e => e.country === name);
    if(d === undefined) return '- -';
    return d.location;
}

export const getCountryData = () => {
  let formattedData = [];

  CountryNames.map(country =>{
      const countryData = {
          name:country.country,
          code:getCountryCode(country.country),
          capital:getCountryCapitail(country.country),
          population:getCountryPopulation(country.country),
          religion:getCoutryReligion(country.country),
          continent:getCountryContinent(country.country),
          flag:getCOuntryFlag(country.country),
          region:getCountryRegion(country.country)
      }
      formattedData.push(countryData);
  })
  
//   console.log(formattedData);

  return formattedData;
};
