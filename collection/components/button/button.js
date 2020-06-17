import { h } from "@stencil/core";
export class Button {
    render() {
        return (h("div", { class: "container" },
            h("button", { class: "btn" },
                h("div", null),
                h("div", { class: "content" }, "Hello World"))));
    }
    static get is() { return "frp-button"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
}
