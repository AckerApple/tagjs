import { checkByElement, destroyGateway } from "./tagGateway.function.js";
/** <tag-element id="" props="json-string" />
 * For Angular @NgModule({schemas: [CUSTOM_ELEMENTS_SCHEMA]}) is required
 */
export class TagElement extends HTMLElement {
    gateway;
    constructor() {
        super();
        this.gateway = checkByElement(this);
    }
    disconnectedCallback() {
        destroyGateway(this.gateway);
    }
}
/** Call me one time */
export function initWebComponents() {
    customElements.define('tag-element', TagElement);
}
//# sourceMappingURL=gateway.web.component.js.map