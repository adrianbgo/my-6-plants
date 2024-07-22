import { HomeComponent } from './home.component';
import { HeroComponent } from '../../organisms/hero/hero.component';
import { HeaderComponent } from '../../organisms/header/header.component';
import { FeaturedProductsComponent } from '../../organisms/featured-products/featured-products.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../organisms/footer/footer.component';
import { moduleMetadata } from '@storybook/angular';
import { ProductCardComponent } from '../../molecules/product-card/product-card.component';
import { ButtonComponent } from '../../atoms/button/button.component';

export default {
  title: 'Pages/Home',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        HeaderComponent,
        HeroComponent,
        FeaturedProductsComponent,
        ProductCardComponent,
        ButtonComponent,
        FooterComponent,
      ],
    }),
  ],
};

export const Home = () => ({
  component: HomeComponent,
});
