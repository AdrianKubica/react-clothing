import React from "react"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { StoreState } from "../../store/root.reducer"
import { TOGGLE_HIDDEN } from "../../store/cart/cart.types"

const reduce = ({ cart: {cartItems} }: StoreState) => {
  return cartItems.reduce((prev, next) => prev + next.quantity!, 0)
}

const CartIcon = () => {
  const itemCount = useSelector(reduce, shallowEqual)
  const dispatch = useDispatch()
  return (
    <div className="cart-icon" onClick={() => dispatch({ type: TOGGLE_HIDDEN })}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

export default CartIcon
