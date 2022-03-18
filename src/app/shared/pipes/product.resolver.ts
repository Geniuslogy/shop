import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { first, map, mergeMap, Observable, of } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<boolean> {

  constructor (private productService: ProductService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.productService.getAll().pipe(
      mergeMap(loaded => {
        if (loaded) {
          return of(true);
        }
        return this.productService.getAll().pipe(
          map((products) => {
            return !!products;
          })
        );
      }),
      first()
    );
  }
}
