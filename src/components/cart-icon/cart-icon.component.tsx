import React from "react"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg"
import { toggleCartVisibility } from "../../store/cart/cart.actions"
import { connect, ConnectedProps } from "react-redux"

const CartIcon = ({ toggleCartVisibility }: PropsFromRedux) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const connector = connect(null, { toggleCartVisibility })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartIcon)
