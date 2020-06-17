import { storiesOf } from '@storybook/html';


storiesOf('Elements|Icon', module).add(
  'Default',
  () => `
  <div class="container max-width-xl padding-y-md">
    <frp-icon type="cooker" />
  </div>
  `
);
storiesOf('Elements|Icon', module).add(
  'Themed',
  () => `
  <div class="container max-width-xl padding-y-md">
    <div class="grid">
      <div class="col-3@sm col-2@md flex flex-column items-start flex-center">
        <frp-icon type="cooker" theme="beko" size="5"/>
      </div>
    </div>
  </div>
  `
);
