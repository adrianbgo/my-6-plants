import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { IconComponent } from '../../atoms/icon/icon.component';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent, IconComponent],
    }),
  ],
};

export const Header = () => ({
  component: HeaderComponent,
});
