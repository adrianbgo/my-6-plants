import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { FormsModule } from '@angular/forms';
import { IconComponent } from './components/atoms/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { HeroComponent } from './components/organisms/hero/hero.component';
import { FeaturedProductsComponent } from './components/organisms/featured-products/featured-products.component';
import { ProductCardComponent } from './components/molecules/product-card/product-card.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductListingComponent } from './components/pages/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    IconComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    FeaturedProductsComponent,
    ProductCardComponent,
    HomeComponent,
    ProductListingComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
