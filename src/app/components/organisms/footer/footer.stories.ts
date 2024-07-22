import { moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { IconComponent } from '../../atoms/icon/icon.component';

export default {
  title: 'Organisms/Footer',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent, IconComponent],
    }),
  ],
};

export const Footer = () => ({
  component: FooterComponent,
});
