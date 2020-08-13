export interface LeadersResponse {
    status: number;
    region: string;
    platform: string;
    regtext: string;
    plattext: string;
    players: { [key: string]: LeadersPlayer };
    test: string[];
}

export interface LeadersPlayer {
    ranked: LeadersRanked;
    stats: LeadersStats;
    profile: LeadersProfile;
}

export interface LeadersProfile {
    verified: number;
    p_name: string;
    p_user: string;
    p_platform: string;
}

export interface LeadersStats {
    level: number;
}

export interface LeadersRanked {
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
