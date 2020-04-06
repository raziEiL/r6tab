import * as API from ".";
import jsonNames from "./json_response/search_by_name.json";
import jsonNamesEmpty from "./json_response/search_by_name_empty.json";
import jsonPlayer from "./json_response/search_by_id.json";
import jsonIncorrect from "./json_response/incorrect_req.json";

describe("NameWrapper", () => {
    test(".length (search_by_name.json)", () => {
        const w = new API.NameWrapper(jsonNames);
        expect(w.length).toBe(3);
    });
    test(".length (search_by_name_empty.json)", () => {
        const w = new API.NameWrapper(jsonNamesEmpty);
        expect(w.length).toBe(0);
    });
    test(".length (incorrect_req.json)", () => {
        const w = new API.NameWrapper(jsonIncorrect);
        expect(w.length).toBe(0);
    });
});

describe("PlayerWrapper", () => {
    test(".isfound (search_by_id.json)", () => {
        const w = new API.PlayerWrapper(jsonPlayer);
        expect(w.isfound).toBeTruthy();
    });
    test(".isfound (incorrect_req.json)", () => {
        const w = new API.PlayerWrapper(jsonIncorrect);
        expect(w.isfound).toBeFalsy();
    });
});

describe("UrlBuilder", () => {
    const builder = new API.UrlBuilder();
    test(".getNames", () => {
        expect(builder.getNames("denis", builder.platform.psn, true)).toBe("https://r6.apitab.com/search/psn/denis");
    });
    test(".searchUplay", () => {
        expect(builder.searchUplay("denis", true)).toBe("https://r6.apitab.com/search/uplay/denis");
    });
    test(".searchPsn", () => {
        expect(builder.searchPsn("denis", true)).toBe("https://r6.apitab.com/search/psn/denis");
    });
    test(".searchXbl", () => {
        expect(builder.searchXbl("denis", true)).toBe("https://r6.apitab.com/search/xbl/denis");
    });
    test(".getPlayerData", () => {
        expect(builder.getPlayerData("9bd44bde-9c48-48ae-9c2b-4e11e4b16083", true)).toBe("https://r6.apitab.com/player/9bd44bde-9c48-48ae-9c2b-4e11e4b16083");
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
        expect(API.format(API.Format.WINRATE, [w.data.ranked.allwins, w.data.ranked.alllosses])).toBe("61.70%");
    });
    test("TIME_FROM_S", () => {
        expect(API.format(API.Format.TIME_FROM_S, w.data.stats.rankedpvp_timeplayed)).toBe("2151ч.");
    });
    test("TIME_FROM_H", () => {
        expect(API.format(API.Format.TIME_FROM_H, w.data.stats.rankedpvp_hoursplayed)).toBe("2151ч.");
    });
});
