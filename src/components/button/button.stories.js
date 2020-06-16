import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

storiesOf('Elements|Button', module)
  .addDecorator(withActions('onClick'))
  .addDecorator(withKnobs)
  .add(
    'Default',
    () => {
      return (
        <frp-button onClick={() => { console.log('Clicked');}}></frp-button>
      );
    }
  );
