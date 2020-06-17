import { h } from "@stencil/core";
import { lowercase } from '../../utils/utils';
export class Icon {
    constructor() {
        /**
         * Determines whether the icon is wrapped in a circle
         */
        this.circle = false;
        /**
         * This component accepts a variable string for a color class we already declared
         */
        this.color = '';
    }
    sizeChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.iconEl.style.fontSize = +newValue + 'rem';
        }
        //if breakpoints values are passed, remove style from child to prevent css rules from being overwritten
        if (this.isBreakpointString(newValue)) {
            this.iconEl.removeAttribute('style');
        }
    }
    isBreakpointString(bp) {
        const breakpoints = ['xxs', 'xs', 'sm', 'md', 'xl', 'xxl', 'xxxl'];
        return breakpoints.includes(bp);
    }
    //set initial Icon Size in Rems
    componentDidLoad() {
        if (this.size) {
            this.iconEl.style.fontSize = +this.size + 'rem';
        }
    }
    /**
     *
     * the hostData is a built-in StencilJS fn that allows us to add css attributes based on tsx conditions.
     * Here it's used for adding the data-theme attribute for themed css variables
     */
    hostData() {
        return { 'data-theme': this.theme ? lowercase(this.theme) : '' };
    }
    render() {
        return [
            h("div", { class: 'color-primary icon icon-' + (this.type ? this.type : ''), ref: el => this.iconEl = el })
        ];
    }
    static get is() { return "frp-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get properties() { return {
        "type": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Can be one of the following classes declared in _icons.scss"
            },
            "attribute": "type",
            "reflect": true
        },
        "circle": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Determines whether the icon is wrapped in a circle"
            },
            "attribute": "circle",
            "reflect": true,
            "defaultValue": "false"
        },
        "theme": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This component accepts a brand string or defaults to 'default' theme"
            },
            "attribute": "theme",
            "reflect": true
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "This component accepts a variable string for a color class we already declared"
            },
            "attribute": "color",
            "reflect": true,
            "defaultValue": "''"
        },
        "size": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Value passed in Ems or breapoints (xxs, xs, sm, md, xl, xxl, xxxl) and if empty, defaults to 'lg (48px)'"
            },
            "attribute": "size",
            "reflect": true
        }
    }; }
    static get elementRef() { return "el"; }
    static get watchers() { return [{
            "propName": "size",
            "methodName": "sizeChanged"
        }]; }
}
