export interface Platform {
    uplay: string;
    psn: string;
    xbl: string;
}

const time = () => Math.floor(Date.now() / 1000).toString();

export class UrlBuilder {
    private _platform: Platform;
    // _sortregion: any;
    private _APIUrl: string;
    private _siteUrl: string;
    private _fakeUrl: string | undefined;
    constructor(fakeUrl?: string) {
        this._fakeUrl = fakeUrl;
        this._siteUrl = "https://r6tab.com/";
        this._APIUrl = "https://r6.api.tab.one/";
        this._platform = {
            uplay: "uplay",
            psn: "psn",
            xbl: "xbl"
        };
        /*         this._sortregion = {
                    all: "p_currentmmr",
                    NA: "p_NA_currentmmr",
                    EU: "p_EU_currentmmr",
                    AS: "p_AS_currentmmr",
                    skill: "p_skillrating",
                    headshot: "p_headshotacc"
                }; */
    }
    get platform() {
        return this._platform;
    }
    /*     get sortregion() {
            return this._sortregion;
        } */
    searchUplay(name: string, noTimestamp?: boolean) {
        return this.getNames(name, this._platform.uplay, noTimestamp);
    }
    searchPsn(name: string, noTimestamp?: boolean) {
        return this.getNames(name, this._platform.psn, noTimestamp);
    }
    searchXbl(name: string, noTimestamp?: boolean) {
        return this.getNames(name, this._platform.xbl, noTimestamp);
    }
    /**
     * @param {String} name player name to search
     * @param {String} platform value from platform property
     * @return {String} request url {GET} https://r6tab.com
     */
    getNames(name: string, platform: string, noTimestamp?: boolean) {
        const url = new URL(this._APIUrl);
        url.pathname = `search/${platform}/${name}`;
        if (!noTimestamp)
            url.searchParams.append("u", time());
        return url.href;
    }
    /**
     * @param {String} p_id mask: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
     * @return {String} request url {GET} https://r6tab.com
     */
    getPlayerData(p_id: string, noTimestamp?: boolean) {
        const url = new URL(this._APIUrl);
        url.pathname = `player/${p_id}`;
        if (!noTimestamp)
            url.searchParams.append("u", time());
        return url.href;
    }
    /**
     * @param {String} platform value from platform property
     * @param {String} sortregion value from sortregion property
     * @return {String} request url {GET} https://r6tab.com
     */
    /*     getLeaders(platform, sortregion) {
            const url = new URL(this._url);
            url.pathname = "api/leaderboards.php";
            url.searchParams.append("sortplatform", platform);
            url.searchParams.append("sortregion", sortregion);
            return url.href;
        } */
    getAvatar(p_user: string) {
        return this._fakeUrl ? this._fakeUrl : `https://ubisoft-avatars.akamaized.net/${p_user}/default_146_146.png`;
    }
    getProfile(p_id: string) {
        return `${this._siteUrl}player/${p_id}`;
    }
}