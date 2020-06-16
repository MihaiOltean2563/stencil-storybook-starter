import { storiesOf } from '@storybook/html';

import readme from './readme.md';

storiesOf('Elements|Spinner', module).add(
  'Default',
  () => '<dg-spinner />',
  {
    notes: {
      markdown: readme
    },
  }
);
