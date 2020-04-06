/**
 * @description Provides simple classes (wrappers) to safety access the Tabwire API
 * @url https://github.com/Tabwire/R6Tab-API
 * @author Denis Medvedev (raziEiL)
 * @version 1.4
 */

/* export * as NameWrapper from "./src/NameWrapper";
export * as PlayerWrapper from "./src/PlayerWrapper";
export * as UrlBuilder from "./src/UrlBuilder"; */

export { NameWrapper } from "./src/name-wrapper";
export { PlayerWrapper, getCompatibleData, CompatibleData } from "./src/player-wrapper";
export { UrlBuilder } from "./src/url-builder";
export { Format, format } from "./src/format";
