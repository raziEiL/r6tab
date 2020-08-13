import R6TabAPI, { R6TabAPIConfig, ServicePlatform, NameWrapper, GamePlatform, Region } from ".";

describe("Config", () => {
    test("Config assign", () => {
        const config: R6TabAPIConfig = { method: "post", headers: { "Content-Type": "test" } };
        const r6tab = new R6TabAPI(config);
        expect(r6tab.config.method).toBe("post");
        expect(r6tab.config.headers["Content-Type"]).toBe("test");
    });
    test("Config immutable", () => {
        const config: R6TabAPIConfig = { apiKey: "okay", timeout: 10, headers: { "Content-Type": "test" } };
        const r6tab = new R6TabAPI(config);
        config.apiKey = "error!";
        config.timeout = 0;
        config.headers["Content-Type"] = "error!";
        expect(r6tab.config.apiKey).toBe("okay");
        expect(r6tab.config.timeout).toBe(10);
        expect(r6tab.config.headers["Content-Type"]).toBe("test");
    });
});

describe("static methods", () => {
    test("#.isPlayerId", () => {
        const invalid = [
            "6311edf5-f022-481c-bc9b-b725b703d5e",
            "6311edf5-f022-481c-bc9b-b725b703d5e22",
            "6311edf5f022-481c-bc9b-b725b703d5e22",
            "6311edf5-f022-481c-bc9b",
            ""];
        expect(R6TabAPI.isPlayerId("6311edf5-f022-481c-bc9b-b725b703d5e2")).toBeTruthy();
        invalid.forEach(p_id => expect(R6TabAPI.isPlayerId(p_id)).toBeFalsy());
    });
    test("#.getAvatar", () => {
        expect(R6TabAPI.getAvatarUrl("6311edf5-f022-481c-bc9b-b725b703d5e2")).toBe("https://ubisoft-avatars.akamaized.net/6311edf5-f022-481c-bc9b-b725b703d5e2/default_256_256.png");
    });
    test("#.getProfile", () => {
        expect(R6TabAPI.getProfileUrl("6311edf5-f022-481c-bc9b-b725b703d5e2")).toBe("https://tabstats.com/siege/player/6311edf5-f022-481c-bc9b-b725b703d5e2");
    });
});

describe("response", () => {
    const r6tab = new R6TabAPI();

    test("#.statsByName", async () => {
        let res = await r6tab.statsByName("denis", ServicePlatform.UPLAY);
        expect(NameWrapper.isFound(res)).toBeTruthy();
        res = await r6tab.statsByName("denis", ServicePlatform.PSN);
        expect(NameWrapper.isFound(res)).toBeTruthy();
        res = await r6tab.statsByName("denis", ServicePlatform.XBL);
        expect(NameWrapper.isFound(res)).toBeTruthy();
    });
    test("#.statsById", async () => {
        let res = await r6tab.statsById("6311edf5-f022-481c-bc9b-b725b703d5e2");
        expect(res.found).toBeTruthy();
        res = await r6tab.statsById("6311edf5-f022-481c-bc9b");
        expect(res.found).toBeFalsy();
    });
    test("#.statsUpdate", async () => {
        let res = await r6tab.statsUpdate("6311edf5-f022-481c-bc9b-b725b703d5e2");
        expect(res.found).toBeTruthy();
        res = await r6tab.statsUpdate("6311edf5-f022-481c-bc9b");
        expect(res.found).toBeFalsy();
    });
    test("#.statsLeaders", async () => {
        const res = await r6tab.statsLeaders(GamePlatform.WINDOWS, Region.ALL);
        expect(res).toBeTruthy();
    });
});
