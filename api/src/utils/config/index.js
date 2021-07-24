require ('dotenv').config();

module.exports = {
    dbUser : process.env.DB_USER,
    dbPass : process.env.DB_PASSWORD,
    dbName : process.env.DB_NAME,
    dbHost : process.env.DB_HOST,
    dbPort : process.env.DB_PORT,
    PORT : process.env.PORT,
    APIKEY : process.env.APIKEY,
    GET_CRYPTOS : "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"
}