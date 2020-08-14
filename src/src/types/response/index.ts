export * from "./api-response";
export * from "./id-response";
export * from "./leaders-response";
export * from "./name-response";

import { NameResponse as BaseResponse } from "./name-response";

export interface NameResponse extends BaseResponse {
    found: boolean; // custom prop
}