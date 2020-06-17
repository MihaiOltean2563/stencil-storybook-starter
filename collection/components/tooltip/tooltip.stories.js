import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withActions } from '@storybook/addon-actions';
import { h } from 'jsx-dom';

storiesOf('Elements|Tooltip', module)
  .add(
    'Default',
    () => {
      return (
        <p>Lets test this new 
          <frp-tooltip text="We build this before, now it is better">Tooltip</frp-tooltip>
        </p>      
      );
    }
  );
