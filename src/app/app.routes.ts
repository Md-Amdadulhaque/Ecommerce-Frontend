import { Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ErrorComponent } from './error/error.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddCategoryComponent } from './add-category/add-category.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:"Home",component:HomeComponent},
    {path:"Category",component:CategoryComponent},
    {path:"Product",component:ProductComponent},
    {path:"AddProduct",component:AddProductComponent},
    {path:"AddCategory",component:AddCategoryComponent},
    {path:"**",component:ErrorComponent}
];
