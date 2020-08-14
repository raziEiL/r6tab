import { NameResponse } from "./types";

const isValid = (res: NameResponse) => res && res.players;
export const isFound = (res: NameResponse) => isValid(res) ? Object.keys(res.players).length > 0 : false;
export const getLen = (res: NameResponse) => isValid(res) ? Object.keys(res.players).length : 0;
export const REGEX_PLAYER_ID_MASK = /^[\dA-z]{8}(-[\dA-z]{4}){3}-[\dA-z]{12}$/; // xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx