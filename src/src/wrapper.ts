import { NameResponse } from "./types";

export class NameWrapper {
    private _res: NameResponse;
    private _count: number;
    found: boolean;

    constructor(res: NameResponse) {
        this._res = res;
        this._count = this.getLen();
        this.found = this._count > 0;
    }
    static isFound(res: NameResponse) {
        return res && res.players ? Object.keys(res.players).length > 0 : false;
    }
    private getLen() {
        return this._res.players ? Object.keys(this._res.players).length : 0;
    }
    get res() {
        return this._res;
    }
    get count() {
        return this._count;
    }
}