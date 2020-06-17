import { r as registerInstance, h } from './core-634d4739.js';

const Spinner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return [
            h("div", { class: "lds-ring" }, h("div", null), h("div", null), h("div", null), h("div", null))
        ];
    }
    static get style() { return "/* https://loading.io/css/ - CSS icon spinners */\n.lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring div {\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid crimson;\n    border-radius: 50%;\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: crimson transparent transparent transparent;\n  }\n  .lds-ring div:nth-child(1) {\n    -webkit-animation-delay: -0.45s;\n    animation-delay: -0.45s;\n  }\n  .lds-ring div:nth-child(2) {\n    -webkit-animation-delay: -0.3s;\n    animation-delay: -0.3s;\n  }\n  .lds-ring div:nth-child(3) {\n    -webkit-animation-delay: -0.15s;\n    animation-delay: -0.15s;\n  }\n  \@-webkit-keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n  \@keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }"; }
};

export { Spinner as dg_spinner };
