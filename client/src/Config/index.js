//CONSTANTES
require ('dotenv').config();
export const APIKEY = process.env.REACT_APP_APIKEY

export const GET_CRYPTOS = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"