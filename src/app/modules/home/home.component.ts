import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products$: any;
 
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((data: any) => {
      this.products$ = {...data};
    });
  }

  search(path: any): void {
    this.productService.getWithQuery(path.target.value).subscribe((data: any) => {
      this.products$ = {...data};
    });
  }

}
