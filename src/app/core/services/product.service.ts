import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, HttpUrlGenerator, QueryParams } from "@ngrx/data";
import { map, Observable, of } from "rxjs";
import { Product } from "src/app/shared/models/product";

@Injectable({ providedIn: 'root' })
export class ProductService extends DefaultDataService<Product> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Product', http, httpUrlGenerator);
  }

  override getAll(): Observable<Product[]> {
    return this.http.get(`https://webshop.wm3.se/api/v1/shop/products`).pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  override getWithQuery(queryParams: string | QueryParams): Observable<Product[]> {
    return this.http.get(`https://webshop.wm3.se/api/v1/shop/products/search?q=` + queryParams).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
}