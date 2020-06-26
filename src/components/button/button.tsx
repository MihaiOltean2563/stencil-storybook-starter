import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
    tag: 'frp-button',
    styleUrl: './button.scss',
    shadow: true
})
export class Button{

  @Event({eventName: 'onClick'}) onClick: EventEmitter<MouseEvent>;
  @Prop() type: string;

  handleClick(event: MouseEvent) {
    this.onClick.emit(event);
    console.log('clicked');
  }

  render(){
    return (
      <button 
        class={this.type ? "btn btn--" + this.type : 'btn btn--default'}
        onClick={this.handleClick.bind(this)}>
        <div></div>
        <div class="content">
         <slot>Default</slot>
        </div>
      </button>
    );
  }

}