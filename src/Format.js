"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Format;
(function (Format) {
    Format[Format["KD"] = 0] = "KD";
    Format[Format["WINRATE"] = 1] = "WINRATE";
    Format[Format["TIME_FROM_S"] = 2] = "TIME_FROM_S";
    Format[Format["TIME_FROM_H"] = 3] = "TIME_FROM_H";
})(Format = exports.Format || (exports.Format = {}));
function format(key, value) {
    switch (key) {
        case Format.KD: {
            return value.toFixed(2);
        }
        case Format.WINRATE: {
            if (!value[0] && !value[1])
                return "-/-";
            return (value[0] / (value[0] + value[1]) * 100).toFixed(2) + "%";
        }
        case Format.TIME_FROM_S: {
            return (value ? Math.floor(value / 3600) : value).toString() + "ч.";
        }
        case Format.TIME_FROM_H: {
            return value.toString() + "ч.";
        }
    }
}
exports.format = format;
