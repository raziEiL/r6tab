"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerWrapper {
    constructor(data) {
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
exports.PlayerWrapper = PlayerWrapper;
function getCompatibleData(w) {
    return {
        p_id: w.data.player.p_id,
        p_name: w.data.player.p_name,
        p_platform: w.data.player.p_platform,
        kd: w.data.ranked.kd,
        p_level: w.data.stats.level,
        p_user: w.data.player.p_user,
        p_currentmmr: w.data.ranked.mmr,
        p_currentrank: w.data.ranked.rank
    };
}
exports.getCompatibleData = getCompatibleData;
