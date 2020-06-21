import React from "react"
import "./cart-item.styles.scss"
import { ShopItem } from "../../store/shop/shop.types"

export const CartItem = ({ item: { imageUrl, price, name, quantity } }: { item: ShopItem }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="name">
        {quantity} x {price}
      </span>
    </div>
  </div>
)
