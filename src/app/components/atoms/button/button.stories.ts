import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export const Primary = () => ({
  component: ButtonComponent,
  props: {
    label: 'Primary Button',
    type: 'button',
    disabled: false,
  },
});

export const Disabled = () => ({
  component: ButtonComponent,
  props: {
    label: 'Disabled Button',
    type: 'button',
    disabled: true,
  },
});
