import { Component, h, State, Prop } from "@stencil/core";

@Component({
    tag: 'frp-tooltip',
    styleUrl: './tooltip.css',
    shadow: true
})

export class Tooltip{

    @State() tooltipVisible = false;
    @Prop() text: string;

    render(){
      let tooltip = null;
      if(this.tooltipVisible){
        tooltip = <div id="tooltip-text">{this.text}</div>;
      }
      return [
        <slot></slot>,
        <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
        tooltip
      ];
    }

    onToggleTooltip(){
      this.tooltipVisible = !this.tooltipVisible;
    }
}