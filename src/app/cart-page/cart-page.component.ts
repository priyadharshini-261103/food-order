import { Component ,OnInit} from '@angular/core';
import { cart } from '../shared/models/cart';
import { CartService } from '../services/cart/cart.service';
import { cartitem } from '../shared/models/cartitem';
import { FoodService } from '../services/food/food.service';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartpageComponent implements OnInit {
  Cart!:cart;
  constructor(private cartservice:CartService){
      
    this.setcart();
  }
  ngOnInit(): void {
    
  }
  removefromcart(cartItem:cartitem){
    this.cartservice.removefromcart(cartItem.food.id);
    this.setcart();
  }
  changequantity(cartItem:cartitem,quantityinstring:string){
    const quantity=parseInt(quantityinstring);
    this.cartservice.changequantity(cartItem.food.id,quantity);
    this.setcart(); 
  }
  setcart(){
    this.Cart=this.cartservice.getcart();
  }

}
