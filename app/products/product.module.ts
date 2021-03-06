import {NgModule} from "@angular/core";
import {ProductFilterPipe} from "./product-filter.pipe";
import {ProductListComponent} from "./product-list.component";
import {ProductDetailComponent} from "./product-detail.component";
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-guard.service";
import {ProductService} from "./product.service";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id',
                canActivate: [ProductDetailGuard],
                component: ProductDetailComponent},
            ]
        )
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule{}