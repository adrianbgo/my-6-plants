import { moduleMetadata } from '@storybook/angular';
import { ProductCardComponent } from './product-card.component';
import { ButtonComponent } from '../../atoms/button/button.component';

export default {
  title: 'Molecules/ProductCard',
  component: ProductCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ProductCardComponent, ButtonComponent],
    }),
  ],
};

export const ProductCard = () => ({
  component: ProductCardComponent,
  props: {
    name: 'Plant Grow Light',
    price: 29.99,
    image: 'assets/products/grow-light.jpg',
  },
});
