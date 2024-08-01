import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RupeePipe } from '../../rupee.pipe';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule, RouterLink,RupeePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product!:Product;
  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    let productId=this.activatedRoute.snapshot.params["id"];
   this.productService.getProductById(productId).subscribe(result=>{
    this.product=result;
   })
  }
}
