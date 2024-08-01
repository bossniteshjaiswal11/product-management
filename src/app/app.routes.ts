import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"products",
        component:HomeComponent
    },
    {
        path:"product/:id",
        component:ProductDetailComponent
    },
    {
        path:"add-product",
        component:AddProductComponent
    },
    {
        path:"edit-product/:id",
        component:EditProductComponent
    }
];
