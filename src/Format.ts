export enum Format {
    KD,
    WINRATE,
    TIME_FROM_S,
    TIME_FROM_H
}

/** Helper function to format data
 * @example
 * key kd, value 125, result 1.25
 * @param {string} key - key from Format enum
 * @param {any} value - value to format
 * @retun {any}
 */
export function format(key: Format, value: any) {
    switch (key) {
        case Format.KD: {
            // value: ranked.kd
            return value.toFixed(2);
        }
        case Format.WINRATE: {
            // value: [RANKEDWINS, RANKEDLOSSES]
            // ex: 50.53%
            if (!value[0] && !value[1])
                return "-/-";
            return (value[0] / (value[0] + value[1]) * 100).toFixed(2) + "%";
        }
        case Format.TIME_FROM_S: {
            // value: stats.rankedpvp_timeplayed
            // ex: 231 ч.
            return (value ? Math.floor(value / 3600) : value).toString() + "ч.";
        }
        case Format.TIME_FROM_H: {
            // value: rankedpvp_hoursplayed
            // ex: 231 ч.
            return value.toString() + "ч.";
        }
    }
}