export const COUNTRY_CONFIG = {
  API_KEY: process.env.NEXT_PUBLIC_IPREGISTRY_API_KEY || '',
  API_URL: 'https://api.ipregistry.co',
  DEFAULT_COUNTRY: {
    name: 'India',
    flag: 'https://cdn.ipregistry.co/flags/emojitwo/in.svg',
  },
}
