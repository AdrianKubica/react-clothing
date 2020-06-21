import React from "react"
import "./checkout.styles.scss"
import { useSelector } from "react-redux"
import { selectCartItems, selectCartItemsTotalPrice } from "../../store/cart/cart.selectors"

export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectCartItemsTotalPrice)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <div className="">{cartItem.name}</div>
      ))}
      <div className="total">
        <span>TOTAL: ${totalPrice}</span>
      </div>
    </div>
  )
}
