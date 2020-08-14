/* eslint-disable @typescript-eslint/camelcase */
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { timestamp } from "ts-raz-util";
import { R6TabAPIConfig, APIResponse, NameResponse, IdResponse, LeadersResponse, ServicePlatform, GamePlatform, Region } from "./types";
import { isFound, REGEX_PLAYER_ID_MASK } from "./helpers";

export class R6TabAPI {
    private _axios: AxiosInstance;
    config: R6TabAPIConfig;

    constructor(config?: R6TabAPIConfig) {
        this.config = this.getBaseConfig(config);
        this._axios = axios.create(this.config);
    }
    static getProfileUrl(p_id: string) {
        return `https://tabstats.com/siege/player/${p_id}`;
    }
    static getAvatarUrl(p_user: string, small?: boolean) {
        return `https://ubisoft-avatars.akamaized.net/${p_user}/default_${small ? "146_146" : "256_256"}.png`;
    }
    static isPlayerId(p_id: string) {
        return REGEX_PLAYER_ID_MASK.test(p_id);
    }
    public async statsByName(username: string, platform: ServicePlatform) {
        return this._axios({ url: `search/${platform}/${username}`, params: { u: timestamp() } })
            .then((resp: APIResponse<NameResponse>) => {
                resp.data.found = isFound(resp.data);
                return resp.data;
            });
    }
    public async statsById(p_id: string) {
        return this.call<IdResponse>({ url: `player/${p_id}`, params: { u: timestamp() } });
    }
    public async statsUpdate(p_id: string) {
        return this.call<IdResponse>({ url: `update/${p_id}`, params: { u: timestamp() } });
    }
    public async statsLeaders(platform: GamePlatform, region: Region) {
        return this.call<LeadersResponse>({ url: `leaderboards/${platform}/${region}`, params: { u: timestamp() } });
    }
    private async call<T>(opts: AxiosRequestConfig): Promise<T> {
        return this._axios(opts).then((resp: APIResponse<T>) => resp.data);
    }
    private getBaseConfig(config?: R6TabAPIConfig) {
        let baseConfig: R6TabAPIConfig = {
            baseURL: "https://r6.apitab.com",
            method: "get",
        };
        let headers: any = {
            // "User-Agent": "R6Tab API Application",
            "Content-Type": "application/json"
        };
        if (config) {
            baseConfig = Object.assign({}, baseConfig, config);
            if (config.apiKey)
                headers.Authorization = `Bearer ${config.apiKey}`;
            if (config.headers)
                headers = Object.assign({}, headers, config.headers);
        }
        baseConfig.headers = headers;
        return baseConfig;
    }
}