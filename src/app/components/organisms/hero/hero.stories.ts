import { moduleMetadata } from '@storybook/angular';
import { HeroComponent } from './hero.component';
import { ButtonComponent } from '../../atoms/button/button.component';

export default {
  title: 'Organisms/Hero',
  component: HeroComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeroComponent, ButtonComponent],
    }),
  ],
};

export const Hero = () => ({
  component: HeroComponent,
});
