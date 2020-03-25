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
function destructWrapper(wrapper) {
    return {
        p_id: wrapper.data.player.p_id,
        p_name: wrapper.data.player.p_name,
        p_platform: wrapper.data.player.p_platform,
        kd: wrapper.data.ranked.kd,
        p_level: wrapper.data.stats.level,
        p_user: wrapper.data.player.p_user,
        p_currentmmr: wrapper.data.ranked.mmr,
        p_currentrank: wrapper.data.ranked.rank
    };
}
exports.destructWrapper = destructWrapper;
