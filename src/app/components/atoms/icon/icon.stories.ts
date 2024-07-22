import { moduleMetadata } from '@storybook/angular';
import { IconComponent } from './icon.component';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      declarations: [IconComponent],
    }),
  ],
};

export const HomeIcon = () => ({
  component: IconComponent,
  props: {
    name: 'home',
  },
});

export const SearchIcon = () => ({
  component: IconComponent,
  props: {
    name: 'search',
  },
});
