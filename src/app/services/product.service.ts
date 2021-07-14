import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'https://fakestoreapi.com/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products : Product[] = [
  //   new Product(1, 'Product 1', 'new',  100, "https://user-images.githubusercontent.com/41929050/61567048-13938600-aa33-11e9-9cfd-712191013192.jpeg",),
  //   new Product(2, 'Product 2', 'new', 200 ,"https://user-images.githubusercontent.com/41929050/61567049-13938600-aa33-11e9-9c69-a4184bf8e524.jpeg"),
  //   new Product(3, 'Product 3', 'new', 2200, "https://user-images.githubusercontent.com/41929050/61567053-13938600-aa33-11e9-9780-104fe4019659.png"),
  //   new Product(4, 'Product 4', 'new', 2100, "https://user-images.githubusercontent.com/41929050/61567051-13938600-aa33-11e9-8ae7-0b5c19aafab4.jpeg"),
  //   new Product(5, 'Product 5', 'new', 130, "https://user-images.githubusercontent.com/41929050/61567054-13938600-aa33-11e9-9163-eec98e239b7a.png"),
  //   new Product(6, 'Product 6', 'new', 110, "https://user-images.githubusercontent.com/41929050/61567055-142c1c80-aa33-11e9-96ff-9fbac6413625.png"),
    
  // ]
  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(apiUrl);
  }
}
