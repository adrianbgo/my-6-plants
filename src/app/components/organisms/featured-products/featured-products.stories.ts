import { moduleMetadata } from '@storybook/angular';
import { FeaturedProductsComponent } from './featured-products.component';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';
import { ButtonComponent } from '../../atoms/button/button.component';

export default {
  title: 'Organisms/FeaturedProducts',
  component: FeaturedProductsComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        FeaturedProductsComponent,
        ProductCardComponent,
        ButtonComponent,
      ],
    }),
  ],
};

export const FeaturedProducts = () => ({
  component: FeaturedProductsComponent,
});
