import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss'
})
export class EditProductComponent {
  formbuilder=inject(FormBuilder);
  productService=inject(ProductService);
  activatedRoute=inject(ActivatedRoute);
  toasterService=inject(ToastrService);
  router=inject(Router);
  productForm:FormGroup=this.formbuilder.group({
    id:[''],
    name:['',[Validators.required,Validators.minLength(5)]],
    brand:['',[Validators.required]],
    image:[''],
    currentPrice:[''],
    standardPrice:[''],
    discount:[''],
  })
  ngOnInit(){
    let productId=this.activatedRoute.snapshot.params["id"];
   this.productService.getProductById(productId).subscribe(result=>{
   this.productForm.patchValue(result);
  })
  }
  editProduct(){
    if(this.productForm.invalid){
      this.toasterService.error("Please provide valid input");
      return;
    }
    console.log("form edited", this.productForm.value);
    this.productService.updateProduct(this.productForm.value).subscribe(result=>{
      this.toasterService.success("product updated");
      this.router.navigateByUrl("/");
    })
  }
}
