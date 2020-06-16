import { Component, h } from "@stencil/core";

@Component({
    tag: 'frp-button',
    styleUrl: './button.scss',
    shadow: true
})
export class Button{

    render(){
      return (
        <div class="container">
          <button 
            class="btn">
            <div></div>
            <div class="content">
              Hello World
            </div>
          </button>
        </div>
      );
    }

}