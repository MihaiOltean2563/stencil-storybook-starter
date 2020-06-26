import { storiesOf } from '@storybook/html';
import { withKnobs } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

storiesOf('Elements|Button', module)
  .addDecorator(withActions('onClick'))
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return (
        <div class="container max-width-xl padding-y-md">
          <frp-button></frp-button>
        </div>
      );
    }
  )

storiesOf('Elements|Button', module)
  .addDecorator(withKnobs)
  .add(
    'Primary',
    () => {
      return (
        <div class="container max-width-xl padding-y-md">
          <frp-button type="primary">Primary</frp-button>
        </div>
      );
    }
  );

 
storiesOf('Elements|Button', module)
  .addDecorator(withKnobs)
  .add(
    'Secondary',
    () => {
      return (
        <div class="container max-width-xl padding-y-md">
          <frp-button type="secondary">Secondary</frp-button>
        </div>
      );
    }
  );
