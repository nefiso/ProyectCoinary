const {GET_CRYPTOS , APIKEY} = require ('../utils/config/index');
const axios = require ('axios');

function getCrypto (req,res,next) {
    let { limit, sort, dir} = req.query;

    let config = {
        headers: {'X-CMC_PRO_API_KEY': APIKEY}
      };
      
    axios.get(`${GET_CRYPTOS}?limit=${parseInt(limit)|| 10}&sort=${sort || 'market_cap'}&sort_dir=${dir || 'desc'}`, config)
        .then((result)=> res.send(result.data.data))
        .catch(e=>next(e))
}


module.exports= {
    getCrypto
}