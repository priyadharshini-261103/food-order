import { Injectable } from '@angular/core';
import { cart } from '../../shared/models/cart';
import { cartitem } from '../../shared/models/cartitem';
import { Food } from '../../shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Cart:cart=new cart();
  addtocart(food:Food):void{
    let Cartitem=this.Cart.items.find (item=>item.food.id===food.id);
    if(Cartitem){
      this.changequantity(food.id,Cartitem.quantity+1);
      return;
    }
    this.Cart.items.push(new cartitem(food));
  }
  removefromcart(foodId:number):void{
    this.Cart.items=this.Cart.items.filter(item=>item.food.id!=foodId);
  }
  changequantity(foodId:number,quantity:number){
    let Cartitem=this.Cart.items.find(item=>item.food.id===foodId);
    if(!Cartitem) return;
    Cartitem.quantity=quantity;
  }
  getcart():cart{
    return this.Cart;
  }
}
