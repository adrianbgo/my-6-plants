import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input.component';

export default {
  title: 'Atoms/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [InputComponent],
      imports: [FormsModule],
    }),
  ],
};

export const TextInput = () => ({
  component: InputComponent,
  props: {
    placeholder: 'Enter text',
    type: 'text',
    value: '',
  },
});

export const PasswordInput = () => ({
  component: InputComponent,
  props: {
    placeholder: 'Enter password',
    type: 'password',
    value: '',
  },
});
