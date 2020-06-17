import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-634d4739.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["frp-icons",[[1,"frp-icons"]]],["dg-spinner",[[1,"dg-spinner"]]],["frp-button",[[1,"frp-button"]]],["frp-colors",[[1,"frp-colors"]]],["frp-tooltip",[[1,"frp-tooltip",{"text":[1],"tooltipVisible":[32]}]]],["my-button",[[1,"my-button",{"label":[1]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["frp-icon",[[1,"frp-icon",{"type":[513],"circle":[516],"theme":[513],"color":[513],"size":[1537]}]]]], options);
});
