import { r as registerInstance, h } from './core-634d4739.js';

const Button = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h("div", { class: "container" }, h("button", { class: "btn" }, h("div", null), h("div", { class: "content" }, "Hello World"))));
    }
    static get style() { return ""; }
};

export { Button as frp_button };
