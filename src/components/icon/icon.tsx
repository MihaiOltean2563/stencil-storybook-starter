import { Component, h, Prop, Element, Watch } from "@stencil/core";
import { lowercase } from '../../utils/utils';

@Component({
  tag: 'frp-icon',
  styleUrl: './icon.scss',
  shadow: true
})

export class Icon{

  @Element() el: HTMLElement;
  iconEl: HTMLElement;

  /**
   * Can be one of the following classes declared in _icons.scss
   */
  @Prop({ reflect: true }) type: string;

  /**
   * This component accepts a brand string or defaults to 'default' theme
   */
  @Prop({ reflect: true }) theme: string;

  /**
   * This component accepts a variable string for a color class we already declared
   */
  @Prop({ reflect: true }) color: string = '';

  /**
   * Value passed in Ems and if empty, defaults to 'lg (48px)'
   */
  @Prop({ mutable: true, reflectToAttr: true}) size: string | {};
  
  @Watch('size')
  sizeChanged(newValue: string, oldValue: string){
    if(newValue !== oldValue){
      this.iconEl.style.fontSize = +newValue + 'rem';
    }
  }

  /**
   *  /**
     * 
     * --icon-xxxs: 8px;
  --icon-xxs:  12px;
  --icon-xs:   16px;
  --icon-sm:   24px;
  --icon-md:   32px;
  --icon-lg:   48px;
  --icon-xl:   64px;
  --icon-xxl:  96px;
  --icon-xxxl: 128px;
   * the hostData is a built-in StencilJS fn that allows us to add css attributes based on tsx conditions.
   * Here it's used for adding the data-theme attribute for themed css variables
   */

  hostData(){
    return {'data-theme': this.theme ? lowercase(this.theme) : ''};
  }

  render(){
    return [
      <div 
        class={ 'color-primary icon icon-' +  (this.type ? this.type : '') }
        ref={el => this.iconEl = el}
      ></div>
    ];
  }
}