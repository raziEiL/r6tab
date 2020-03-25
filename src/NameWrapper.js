"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NameWrapper {
    constructor(data) {
        this._data = data;
        this._length = this.getLen();
        this.index = 0;
    }
    getLen() {
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
exports.NameWrapper = NameWrapper;
