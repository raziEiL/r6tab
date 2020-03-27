"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const time = () => Math.floor(Date.now() / 1000).toString();
class UrlBuilder {
    constructor(fakeUrl) {
        this._fakeUrl = fakeUrl;
        this._siteUrl = "https://r6tab.com/";
        this._APIUrl = "https://r6.api.tab.one/";
        this._platform = {
            uplay: "uplay",
            psn: "psn",
            xbl: "xbl"
        };
    }
    get platform() {
        return this._platform;
    }
    searchUplay(name, noTimestamp) {
        return this.getNames(name, this._platform.uplay, noTimestamp);
    }
    searchPsn(name, noTimestamp) {
        return this.getNames(name, this._platform.psn, noTimestamp);
    }
    searchXbl(name, noTimestamp) {
        return this.getNames(name, this._platform.xbl, noTimestamp);
    }
    getNames(name, platform, noTimestamp) {
        const url = new URL(this._APIUrl);
        url.pathname = `search/${platform}/${name}`;
        if (!noTimestamp)
            url.searchParams.append("u", time());
        return url.href;
    }
    getPlayerData(p_id, noTimestamp) {
        const url = new URL(this._APIUrl);
        url.pathname = `player/${p_id}`;
        if (!noTimestamp)
            url.searchParams.append("u", time());
        return url.href;
    }
    getAvatar(p_user) {
        return this._fakeUrl ? this._fakeUrl : `https://ubisoft-avatars.akamaized.net/${p_user}/default_146_146.png`;
    }
    getProfile(p_id) {
        return `${this._siteUrl}player/${p_id}`;
    }
}
exports.UrlBuilder = UrlBuilder;
