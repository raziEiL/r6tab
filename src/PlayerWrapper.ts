export interface PlayerData {
    status: number;
    found: boolean;
    player: Player;
    custom: Custom;
    social: Social;
    stats: Stats;
    ranked: Ranked;
}

export interface Custom {
    customurl: string;
    verified: boolean;
    visitors: number;
    banned: boolean;
}

export interface Player {
    p_id: string;
    p_user: string;
    p_name: string;
    p_platform: string;
}

export interface Ranked {
    AS_kills: number;
    AS_deaths: number;
    AS_wins: number;
    AS_losses: number;
    AS_abandons: number;
    AS_mmr: number;
    AS_maxmmr: number;
    AS_champ: number;
    AS_mmrchange: number;
    AS_actualmmr: number;
    AS_matches: number;
    AS_wl: string;
    AS_kd: string;
    AS_rank: number;
    AS_rankname: string;
    AS_maxrank: number;
    AS_maxrankname: string;
    AS_killpermatch: number;
    AS_deathspermatch: number;
    allkills: number;
    alldeaths: number;
    allwins: number;
    alllosses: number;
    allabandons: number;
    EU_kills: number;
    EU_deaths: number;
    EU_wins: number;
    EU_losses: number;
    EU_abandons: number;
    EU_mmr: number;
    EU_maxmmr: number;
    EU_champ: number;
    EU_mmrchange: number;
    EU_actualmmr: number;
    EU_matches: number;
    EU_wl: string;
    EU_kd: string;
    EU_rank: number;
    EU_rankname: string;
    EU_maxrank: number;
    EU_maxrankname: string;
    EU_killpermatch: number;
    EU_deathspermatch: number;
    NA_kills: number;
    NA_deaths: number;
    NA_wins: number;
    NA_losses: number;
    NA_abandons: number;
    NA_mmr: number;
    NA_maxmmr: number;
    NA_champ: number;
    NA_mmrchange: number;
    NA_actualmmr: number;
    NA_matches: number;
    NA_wl: string;
    NA_kd: string;
    NA_rank: number;
    NA_rankname: string;
    NA_maxrank: number;
    NA_maxrankname: string;
    NA_killpermatch: number;
    NA_deathspermatch: number;
    mmr: number;
    maxmmr: number;
    kd: number;
    rank: number;
    rankname: string;
    maxrank: number;
    maxrankname: string;
    topregion: string;
    actualmmr: number;
    allmatches: number;
    allkd: string;
    allwl: string;
    killpermatch: number;
    deathspermatch: number;
}

export interface Social {
    status: number;
    utime: number;
    userid: number;
    uplay_user: string;
    uplay_name: string;
    twitter: string;
    instagram: string;
    twitch: string;
    twitch_id: string;
    youtube: string;
    mixer: string;
    discord: string;
    discord_id: string;
    discord_user: string;
    esl: string;
    bio: string;
    background: string;
    embed: string;
    aliases_hide: number;
    twitch_display: number;
    premium: Premium;
    is_premium: boolean;
}

export interface Premium {
    tabwire: boolean;
    discord: boolean;
    twitch: boolean;
}

export interface Stats {
    level: number;
    tabmmr: number;
    tabrank: number;
    tabrankname: string;
    casualpvp_kills: number;
    casualpvp_death: number;
    casualpvp_matchwon: number;
    casualpvp_matchlost: number;
    casualpvp_timeplayed: number;
    casualpvp_hoursplayed: number;
    casualpvp_matches: number;
    casualpvp_kd: string;
    casualpvp_wl: string;
    rankedpvp_kills: number;
    rankedpvp_death: number;
    rankedpvp_matchwon: number;
    rankedpvp_matchlost: number;
    rankedpvp_timeplayed: number;
    rankedpvp_hoursplayed: number;
    rankedpvp_matches: number;
    rankedpvp_kd: string;
    rankedpvp_wl: string;
    generalpvp_headshot: number;
    generalpvp_kills: number;
    generalpvp_timeplayed: number;
    generalpve_kills: number;
    generalpve_death: number;
    generalpve_matchwon: number;
    generalpve_matchlost: number;
    generalpve_headshot: number;
    generalpve_timeplayed: number;
    generalpvp_hoursplayed: number;
    generalpvp_death: number;
    generalpvp_kd: string;
    generalpvp_matchwon: number;
    generalpvp_matchlost: number;
    generalpvp_matches: number;
    generalpvp_wl: string;
    generalpvp_hsrate: string;
    generalpvp_killassists: number;
    generalpvp_meleekills: number;
    generalpvp_revive: number;
    generalpvp_penetrationkills: number;
    generalpve_hoursplayed: number;
    generalpve_matches: number;
    generalpve_kd: string;
    generalpve_wl: string;
    generalpve_hsrate: string;
    plantbombpvp_matchwon: number;
    plantbombpvp_matchlost: number;
    secureareapvp_matchwon: number;
    secureareapvp_matchlost: number;
    rescuehostagepvp_matchwon: number;
    rescuehostagepvp_matchlost: number;
    plantbombpvp_matches: number;
    plantbombpvp_wl: string;
    secureareapvp_matches: number;
    secureareapvp_wl: string;
    rescuehostagepvp_matches: number;
    rescuehostagepvp_wl: string;
}

export class PlayerWrapper {
    private _data: PlayerData;
    private _isfound: boolean;
    /**
     * @constructor
     * @param {Object} data - response object
     */
    constructor(data: any) {
        this._data = data;
        this._isfound = this.isFound();
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
        this._isfound = this.isFound();
    }
    get isfound() {
        return this._isfound;
    }
    isFound() {
        return this._data.found && typeof this._data.found === "boolean";
    }
}

export interface CompatibleData {
    p_id: string;
    p_name: string;
    p_level: number;
    p_platform: string;
    p_user: string;
    p_currentmmr: number;
    p_currentrank: number;
    kd: number;
}

export function getCompatibleData(w: PlayerWrapper): CompatibleData {
    return {
        p_id: w.data.player.p_id,
        p_name: w.data.player.p_name,
        p_platform: w.data.player.p_platform,
        kd: w.data.ranked.kd,
        // keys below were changed in new API
        p_level: w.data.stats.level,
        p_user: w.data.player.p_user,
        p_currentmmr: w.data.ranked.mmr,
        p_currentrank: w.data.ranked.rank
    };
}