import { Injectable } from '@angular/core';
import { Response,Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { Album } from './album';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json'
  private _productsUrl = '../assets/products.json'


  constructor(private _http:Http) { }

  public getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .map(r => <Album>r.json())
  }

  public getProducts(): Observable<Product[]> {
    return this._http
      .get(this._productsUrl)
      .map(response => <Product[]>response.json())
    
  }


}
