export interface NameResponse {
    authorized: boolean;
    status: number;
    foundmatch: boolean;
    requested: string;
    players: { [key: string]: NamePlayer };
}

export interface NamePlayer {
    profile: NameProfile;
    refresh: NameRefresh;
    stats: NameStats;
    ranked: NameRanked;
}

export interface NameProfile {
    p_id: string;
    p_name: string;
    p_user: string;
    p_platform: string;
    verified: boolean;
}

export interface NameRefresh {
    x: number;
    s: number;
}

export interface NameStats {
    level: number;
}

export interface NameRanked {
    kd: number;
    mmr: number;
    rank: number;
    champ: number;
    NA_mmr: number;
    NA_rank: number;
    NA_champ: number;
    EU_mmr: number;
    EU_rank: number;
    EU_champ: number;
    AS_mmr: number;
    AS_rank: number;
    AS_champ: number;
}