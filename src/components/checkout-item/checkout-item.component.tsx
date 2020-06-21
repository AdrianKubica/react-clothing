import React from "react"

import "./checkout-item.styles.scss"
import { useDispatch } from "react-redux"
import { clearCartItem, addCartItem, removeCartItem } from "../../store/cart/cart.actions"
import { ShopItem } from "../../store/shop/shop.types"

export const CheckoutItem = ({ cartItem }: { cartItem: ShopItem }) => {
  const { id, name, imageUrl, price, quantity } = cartItem
  const dispatch = useDispatch()
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeCartItem(cartItem))}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => dispatch(clearCartItem(id))}>
        &#10005;
      </div>
    </div>
  )
}
