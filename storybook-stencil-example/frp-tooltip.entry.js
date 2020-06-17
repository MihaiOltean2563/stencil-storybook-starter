import { r as registerInstance, h } from './core-634d4739.js';

const Tooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tooltipVisible = false;
    }
    render() {
        let tooltip = null;
        if (this.tooltipVisible) {
            tooltip = h("div", { id: "tooltip-text" }, this.text);
        }
        return [
            h("slot", null),
            h("span", { id: "tooltip-icon", onClick: this.onToggleTooltip.bind(this) }, "?"),
            tooltip
        ];
    }
    onToggleTooltip() {
        this.tooltipVisible = !this.tooltipVisible;
    }
    static get style() { return ":host{\n  position: relative;\n}\n#tooltip-icon{\n  background: black;\n  color: white;\n  padding: .15rem .45rem;\n  border-radius: 50%;\n  margin-left: .5rem;\n}\n\n#tooltip-text{\n  position: absolute;\n  top: 1.5rem;\n  left: 1rem;\n  width: 8rem;\n  background: black;\n  color: white;\n  padding: .5rem;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .26);\n  box-shadow: 0 2px 6px rgba(0, 0, 0, .26);\n}"; }
};

export { Tooltip as frp_tooltip };
