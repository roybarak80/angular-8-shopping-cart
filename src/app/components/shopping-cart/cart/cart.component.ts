import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1, productId:1, productName:'test 1', qty:4, price:100},
    // {id:2, productId:2, productName:'test 2', qty:3, price:300},
    // {id:3, productId:3, productName:'test 3', qty:1, price:500},
    // {id:4, productId:4, productName:'test 4', qty:4, price:100},
  ]

  cartTotal = 0;

  constructor(private msg: MessengerService) { }

  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })

  }

  addProductToCart(product: Product) {

    let isItemExists = false;
    let existProduct = {};
    if (this.cartItems.length > 0) {

      existProduct = this.cartItems.find((item) => (
        item.productId === product.id)
      );
      isItemExists = !_.isEmpty(existProduct) ? true : false;
      if (isItemExists) {
        let currItemIndex = this.cartItems.indexOf(existProduct);
        this.cartItems[currItemIndex].qty++;
      } else {
        this.cartItems.push(
          {
            productName: product.title,
            productId: product.id,
            qty: 1,
            price: product.price
          }
        )
      }
    } else {
      this.cartItems.push(
        {
          productName: product.title,
          productId: product.id,
          qty: 1,
          price: product.price
        }
      )
    }

    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
