import { h } from "@stencil/core";
import { lowercase, capitalize } from '../../utils/utils';
export class Icons {
    constructor() {
        /**
        * Classes for all icons
        */
        this.appIcons = [
            { type: 'cooker' },
            { type: 'dishwasher' },
            { type: 'fridge-freezer' },
            { type: 'other-appliances' },
            { type: 'tumble-dryer' },
            { type: 'washing-machine' },
            { type: 'tip' },
            { type: 'brochure' },
            { type: 'settings' },
            { type: 'cross' },
            { type: 'tick' },
            { type: 'breakdown' },
            { type: 'delivery' },
            { type: 'repair-engineer' },
            { type: 'savings' },
            { type: 'accidental-damage' },
            { type: 'arrow-down' }
        ];
        this.appColors = [
            { name: 'Beko' },
            { name: 'Hoover' },
            { name: 'Candy' },
            { name: 'Hotpoint' },
            { name: 'success', type: '' },
            { name: 'error', type: '' },
            { name: 'warning', type: '' },
        ];
        this.appSizes = [
            { name: 'xxs' },
            { name: 'xs' },
            { name: 'sm' },
            { name: 'md' },
            { name: 'lg' },
            { name: 'xl' },
            { name: 'xxl' },
            { name: 'xxxl' }
        ];
    }
    render() {
        return [
            h("div", { class: "container max-width-xl padding-y-md" },
                h("h4", { class: "padding-bottom-sm text-underline font-italic" }, "Themes & Colors"),
                h("div", { class: "grid" }, this.appColors.map(color => (h("div", { class: "col-3@sm col-2@md flex flex-column items-center flex-center border padding-top-sm" },
                    h("frp-icon", { theme: color.name, type: "other-appliances", size: "3.5", color: color.type == '' ? color.name : '' }),
                    h("p", { "data-theme": lowercase(color.name), class: 'text-sm padding-y-sm color-primary color-' + color.name }, capitalize(color.name)))))),
                h("h4", { class: "padding-y-sm text-underline font-italic" }, "Types"),
                h("div", { class: "grid" }, this.appIcons.map(icon => (h("div", { class: "col-3@sm col-2@md flex border flex-column items-center flex-center padding-top-sm" },
                    h("frp-icon", { theme: 'beko', type: icon.type, size: "3.5" }),
                    h("div", { class: "text-xs padding-y-sm" },
                        ".icon-",
                        icon.type))))),
                h("h4", { class: "padding-y-sm text-underline font-italic" }, "Sizes"),
                h("div", { class: "grid" }, this.appSizes.map(size => (h("div", { class: "col-3@sm col-2@md flex border flex-column items-center flex-center padding-top-sm" },
                    h("frp-icon", { theme: 'Hoover', type: "dishwasher", size: size.name }),
                    h("div", { class: "text-xs padding-y-sm" },
                        ".icon--",
                        size.name))))))
        ];
    }
    static get is() { return "frp-icons"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./icons.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["icons.css"]
    }; }
}
