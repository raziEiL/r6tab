export interface NameData {
    status: number;
    requested: string;
    players: { [key: string]: Player };
}

export interface Player {
    profile: Profile;
    stats: Stats;
    ranked: Ranked;
}

export interface Profile {
    p_name: string;
    p_user: string;
    p_platform: string;
    verified: boolean;
}

export interface Stats {
    level: number;
}

export interface Ranked {
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

export class NameWrapper {
    private _data: NameData;
    index: number;
    private _length: number;
    /**
     * @constructor
     * @param {Object} data - response object
     */
    constructor(data: any) {
        this._data = data;
        this._length = this.getLen();
        this.index = 0;
    }
    private getLen() {
        return this._data.players ? Object.keys(this._data.players).length : 0;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
        this._length = this.getLen();
    }
    get length() {
        return this._length;
    }
}