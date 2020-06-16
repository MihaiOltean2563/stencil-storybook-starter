import { Component, h } from "@stencil/core";
import { lowercase, capitalize } from '../../utils/utils';

@Component({
  tag: 'frp-icons',
  styleUrl: './icons.scss',
  shadow: true
})

export class Icons{

  /**
  * Classes for all icons
  */
  appIcons = [
    { type: 'cooker'},
    { type: 'dishwasher'},
    { type: 'fridge-freezer'},
    { type: 'other-appliances'},
    { type: 'tumble-dryer'},
    { type: 'washing-machine'},
    { type: 'tip'},
    { type: 'brochure'},
    { type: 'settings'},
    { type: 'cross'},
    { type: 'tick'},
    { type: 'breakdown'},
    { type: 'delivery'},
    { type: 'repair-engineer'},
    { type: 'savings'},
    { type: 'accidental-damage'},
    { type: 'arrow-down'}
  ];

  appColors = [
    { name: 'Beko'},
    { name: 'Hoover'},
    { name: 'Candy'},
    { name: 'Hotpoint'},
    { name: 'success', type: ''},
    { name: 'error', type: ''},
    { name: 'warning', type: ''},
  ];

  appSizes = [
    { name: 'xxs'},
    { name: 'xs' },
    { name: 'sm' },
    { name: 'md'},
    { name: 'lg'},
    { name: 'xl'},
    { name: 'xxl'},
    { name: 'xxxl'}
  ];

  render(){
    return [
      <div class="container max-width-xl padding-y-md">
        {/* Themes & Colors */}
        <h4 class="padding-bottom-sm text-underline font-italic">Themes & Colors</h4>
        <div class="grid">
          {this.appColors.map(color => (
          <div class="col-3@sm col-2@md flex flex-column items-center flex-center border padding-top-sm">
            <frp-icon theme={color.name} type="other-appliances" size="3.5" color={color.type == '' ? color.name: ''}></frp-icon>
            <p 
              data-theme={lowercase(color.name)}
              class={ 'text-sm padding-y-sm color-primary color-' + color.name }>
              {capitalize(color.name)}
            </p>
          </div>
          ))}
        </div>

        {/* Types */}
        <h4 class="padding-y-sm text-underline font-italic">Types</h4>
        <div class="grid">
          {this.appIcons.map(icon => (
            <div class="col-3@sm col-2@md flex border flex-column items-center flex-center padding-top-sm">
               <frp-icon theme='beko' type={icon.type} size="3.5"></frp-icon>
               <div class="text-xs padding-y-sm">.icon-{icon.type}</div>
            </div>
            ))}
        </div>
        
        {/* Sizes */}
        <h4 class="padding-y-sm text-underline font-italic">Sizes</h4>
        <div class="grid">
          {this.appSizes.map(size => (
            <div class="col-3@sm col-2@md flex border flex-column items-center flex-center padding-top-sm">
               <frp-icon theme='Hoover' type="dishwasher" size={size.name}></frp-icon>
               <div class="text-xs padding-y-sm">.icon--{size.name}</div>
            </div>
          ))}
        </div>

      </div>
    ];
  }
}