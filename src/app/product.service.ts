import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpclient=inject(HttpClient);
  constructor() { }
  getProducts(){
    return this.httpclient.get<Product[]>("http://localhost:3000/products");
  }
  getProductById(id:number){
    return this.httpclient.get<Product>("http://localhost:3000/products/"+id);
  }
  addProduct(product:Product){
    return this.httpclient.post<Product>("http://localhost:3000/products",product);
  }
  updateProduct(product:Product){
    return this.httpclient.put<Product>("http://localhost:3000/products/"+product.id,product);
  }
}
