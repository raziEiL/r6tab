import * as API from "./index";
import jsonNames from "./json_response/names.json";
import jsonNamesEmpty from "./json_response/names_empty.json";
import jsonPlayer from "./json_response/player_full.json";
import jsonPlayersEmpty from "./json_response/player_empty.json";

describe("NameWrapper", () => {
    test(".length (names.json)", () => {
        const w = new API.NameWrapper(jsonNames);
        expect(w.length).toBe(2);
    });
    test(".length (names_empty.json)", () => {
        const w = new API.NameWrapper(jsonNamesEmpty);
        expect(w.length).toBe(0);
    });
});

describe("PlayerWrapper", () => {
    test(".isfound (player_full.json)", () => {
        const w = new API.PlayerWrapper(jsonPlayer);
        expect(w.isfound).toBeTruthy();
    });
    test(".isfound (player_empty.json)", () => {
        const w = new API.PlayerWrapper(jsonPlayersEmpty);
        expect(w.isfound).toBeFalsy();
    });
});

describe("UrlBuilder", () => {
    const builder = new API.UrlBuilder();
    test(".getNames", () => {
        expect(builder.getNames("denis", builder.platform.psn, true)).toBe("https://r6.api.tab.one/search/psn/denis");
    });
    test(".searchUplay", () => {
        expect(builder.searchUplay("denis", true)).toBe("https://r6.api.tab.one/search/uplay/denis");
    });
    test(".searchPsn", () => {
        expect(builder.searchPsn("denis", true)).toBe("https://r6.api.tab.one/search/psn/denis");
    });
    test(".searchXbl", () => {
        expect(builder.searchXbl("denis", true)).toBe("https://r6.api.tab.one/search/xbl/denis");
    });
    test(".getPlayerData", () => {
        expect(builder.getPlayerData("9bd44bde-9c48-48ae-9c2b-4e11e4b16083", true)).toBe("https://r6.api.tab.one/player/9bd44bde-9c48-48ae-9c2b-4e11e4b16083");
    });
    test(".getAvatar", () => {
        expect(builder.getAvatar("9bd44bde-9c48-48ae-9c2b-4e11e4b16083")).toBe("https://ubisoft-avatars.akamaized.net/9bd44bde-9c48-48ae-9c2b-4e11e4b16083/default_146_146.png");
    });
    test(".getProfile", () => {
        expect(builder.getProfile("9bd44bde-9c48-48ae-9c2b-4e11e4b16083")).toBe("https://r6tab.com/player/9bd44bde-9c48-48ae-9c2b-4e11e4b16083");
    });
});

describe("Format", () => {
    const w = new API.PlayerWrapper(jsonPlayer);
    test("KD", () => {
        expect(API.format(API.Format.KD, w.data.ranked.kd)).toBe("1.21");
    });
    test("WINRATE", () => {
        expect(API.format(API.Format.WINRATE, [w.data.ranked.allwins, w.data.ranked.alllosses])).toBe("59.46%");
    });
    test("TIME_FROM_S", () => {
        expect(API.format(API.Format.TIME_FROM_S, w.data.stats.rankedpvp_timeplayed)).toBe("2148ч.");
    });
    test("TIME_FROM_H", () => {
        expect(API.format(API.Format.TIME_FROM_H, w.data.stats.rankedpvp_hoursplayed)).toBe("2148ч.");
    });
});
