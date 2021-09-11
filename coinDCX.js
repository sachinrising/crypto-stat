const request = require('request')

const MARKET = "market";
const CHANGE_24_HOUR = "change_24_hour";
const HIGH = "high";
const LOW = "low";
const VOLUME = "volume";
const LAST_PRICE = "last_price";

function getResonse(baseUrl, reqUrl, coinName) {
    request.get(baseUrl + reqUrl, function (error, response, body) {
        if (error) {
            return console.log(error);
        }

        let values = JSON.parse(body);
        for (let value of values) {
            if (value[MARKET] == coinName) {
                return value
            }
        }

    })
}


// Ticker


// Returns an array of strings of currently active markets.
// reqURL = "/exchange/v1/markets";

// Markets details
// reqURL = "/exchange/v1/markets_details/?coindcx_name=SNMBTC";

// Trades
// reqBaseUrl = "https://public.coindcx.com"

// reqURL = "/market_data/trade_history?pair=B-BTC_USDT&limit=50"
export function getCoinStatus(coinName){
    let reqBaseUrl = "https://api.coindcx.com";
    let reqURL = "/exchange/ticker";
    return getResonse(reqBaseUrl, reqURL, coinName)
}



