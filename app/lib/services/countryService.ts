import axios from 'axios'
import { COUNTRY_CONFIG } from '../config/country'

export interface CountryInfo {
  name: string
  flag: string
}

export async function getCountryInfo(): Promise<CountryInfo> {
  try {
    return COUNTRY_CONFIG.DEFAULT_COUNTRY
    // const response = await axios.get(
    //   `${COUNTRY_CONFIG.API_URL}/?key=${COUNTRY_CONFIG.API_KEY}`
    // )

    // return {
    //   name: response.data.location.country.name,
    //   flag: response.data.location.country.flag.emojitwo,
    // }
  } catch (error) {
    console.error('Error fetching country info:', error)
    return COUNTRY_CONFIG.DEFAULT_COUNTRY
  }
}
