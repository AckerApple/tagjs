import { Gateway } from "./tagGateway.function.js";
/** <tag-element id="" props="json-string" />
 * For Angular @NgModule({schemas: [CUSTOM_ELEMENTS_SCHEMA]}) is required
 */
export declare class TagElement extends HTMLElement {
    gateway: Gateway;
    inlineBlock: HTMLElement;
    constructor();
    disconnectedCallback(): void;
}
/** Call me one time */
export declare function initWebComponents(): void;
