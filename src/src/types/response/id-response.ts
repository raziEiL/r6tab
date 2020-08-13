export interface IdResponse {
    status: number;
    found: boolean;
    player: IdPlayer;
    custom: IdCustom;
    refresh: IdRefresh;
    aliases: { [key: string]: IdAlias };
    stats: IdStats;
    ranked: IdRanked;
    social: IdSocial;
    operators: { [key: string]: IdOperator };
    overlay: IdOverlay;
    history: { [key: string]: IdHistory };
    seasons: { [key: string]: IdSeason };
    op_main: IdOpMain;
}

export interface IdAlias {
    name: string;
    utime: number;
    date: string;
}

export interface IdCustom {
    customurl: boolean;
    verified: boolean;
    visitors: number;
    banned: boolean;
}

export interface IdHistory {
    started: number;
    ended: number;
    date: string;
    casual_kills: number;
    casual_deaths: number;
    casual_wins: number;
    casual_losses: number;
    casual_matches: number;
    ranked_kills: number;
    ranked_deaths: number;
    ranked_wins: number;
    ranked_losses: number;
    ranked_matches: number;
    total_wins: number;
    total_losses: number;
    total_kills: number;
    total_headshots: number;
    NA_mmrchange: number;
    NA_mmr: number;
    EU_mmrchange: number;
    EU_mmr: number;
    AS_mmrchange: number;
    AS_mmr: number;
    casual_kd: string;
    casual_wl: string;
    ranked_kd: string;
    ranked_wl: string;
    headshot_accuracy: string;
    color: string;
}

export interface IdOpMain {
    attacker: string;
    defender: string;
    seasonal: IdOpMainOverall;
    overall: IdOpMainOverall;
}

export interface IdOpMainOverall {
    attacker: string;
    defender: string;
}

export interface IdOperator {
    id: string;
    type: string;
    overall: IdOperatorOverall;
    seasonal: IdOperatorOverall;
}

export interface IdOperatorOverall {
    wins: number;
    losses: number;
    kills: number;
    deaths: number;
    timeplayed: number;
    kd: string;
    winrate: number;
}

export interface IdOverlay {
    team: any;
    roster: any;
}

export interface IdPlayer {
    p_id: string;
    p_user: string;
    p_name: string;
    p_name_small: string;
    p_platform: string;
}

export interface IdRanked {
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
    AS_intkd: number;
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
    EU_intkd: number;
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
    NA_intkd: number;
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
    champ: number;
    topregion: string;
    actualmmr: number;
    best_mmrchange: number;
    best_wins: number;
    best_losses: number;
    best_matches: number;
    best_kd: string;
    best_intkd: number;
    best_wl: string;
    allmatches: number;
    allkd: string;
    allintkd: number;
    allwl: string;
    killpermatch: number;
    deathspermatch: number;
}

export interface IdRefresh {
    queued: boolean;
    possible: boolean;
    qtime: number;
    utime: number;
    status: number;
}

export interface IdSeason {
    NA_mmr: number;
    NA_champ: number;
    NA_wins: number;
    NA_losses: number;
    NA_abandons: number;
    NA_kills: number;
    NA_deaths: number;
    EU_mmr: number;
    EU_champ: number;
    EU_wins: number;
    EU_losses: number;
    EU_abandons: number;
    EU_kills: number;
    EU_deaths: number;
    AS_mmr: number;
    AS_champ: number;
    AS_wins: number;
    AS_losses: number;
    AS_abandons: number;
    AS_kills: number;
    AS_deaths: number;
    seasonname: string;
    seasonclass: string;
    champ: string;
    maxmmr: number;
    maxrank: number;
    maxrankname: string;
}

export interface IdSocial {
    is_premium: boolean;
}

export interface IdStats {
    level: number;
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
    rankedpvp_roundwl: string;
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
    tabmmr: number;
    tabrank: number;
    tabrankname: string;
}
