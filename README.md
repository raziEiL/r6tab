# R6Tabwire API Client for NodeJS
The open-source library as a means of accessing the public [R6Tab | Tabstats.com](https://github.com/Tabwire/R6Tab-API) web API.

## Installation
`npm i --save @raz1el/r6tab`

## Usage
```js
import R6TabAPI, { ServicePlatform, GamePlatform, Region } from "@raz1el/r6tab";

const r6tab = new R6TabAPI();
```

### If a authentication token is requred
```js
const r6tab = new R6TabAPI({ apiKey: "xxxxxxxxxxxx" });
```

### Promises
```js
//  Get general stats (p_id, p_name, level ...)
r6tab.statsByName("Raz1el", ServicePlatform.UPLAY)
    .then(res => {
        console.log(res);
    }).catch(console.error);

// Get detailed stats (p_id, p_name, level, general stats, ranked data ...)
r6tab.statsById("6311edf5-f022-481c-bc9b-b725b703d5e2")
    .then(res => {
        console.log(res);
    }).catch(console.error);

// Request an stats update. Get stats similar to #.statsById
r6tab.statsUpdate("6311edf5-f022-481c-bc9b-b725b703d5e2")
    .then(res => {
        console.log(res);
    }).catch(console.error);

// Get leaderboards
r6tab.statsLeaders(GamePlatform.WINDOWS, Region.ALL)
    .then(res => {
        console.log(res);
    }).catch(console.error);
```
### Async/Await
```js
await r6tab.statsByName("Raz1el", ServicePlatform.PSN);
await r6tab.statsById("6311edf5-f022-481c-bc9b-b725b703d5e2");
await r6tab.statsUpdate("6311edf5-f022-481c-bc9b-b725b703d5e2");
await r6tab.statsLeaders(GamePlatform.WINDOWS, Region.ALL);
```

### Use found property for data validation
```js
const res = await r6tab.statsByName("Raz1el", ServicePlatform.PSN);

if (res.found) {
    console.log(res);
}
else {
    console.log("data not found");
}
```
```js
const res = await r6tab.statsById("6311edf5-f022-481c-bc9b-b725b703d5e2");

if (res.found) {
    console.log(res);
}
else {
    console.log("data not found");
}
```
### Static method usages
```js
const p_id = "6311edf5-f022-481c-bc9b-b725b703d5e2";
R6TabAPI.isPlayerId(p_id); // true
R6TabAPI.isPlayerId("xxxx-xxxx-xxxx-xxxx"); // false
R6TabAPI.getAvatarUrl(p_id); // https://ubisoft-avatars.akamaized.net/6311edf5-f022-481c-bc9b-b725b703d5e2/default_256_256.png
R6TabAPI.getProfileUrl(p_id); // https://tabstats.com/siege/player/6311edf5-f022-481c-bc9b-b725b703d5e2
```

## JSON Response
https://github.com/raziEiL/r6tab/tree/master/src/json_response

## Donation
If you want to thank me for the work feel free to [send any amount](https://www.paypal.me/razicat "send any amount").
