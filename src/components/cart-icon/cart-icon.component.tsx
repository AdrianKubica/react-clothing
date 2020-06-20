import React from "react"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg"
import { setCartVisibility } from "../../store/cart/cart.actions"
import { connect, ConnectedProps } from "react-redux"
import { StoreState } from "../../store/root.reducer"

const CartIcon = ({ cart, setCartVisibility }: PropsFromRedux) => (
  <div className="cart-icon" onClick={() => setCartVisibility(!cart.visible)}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
)

const mapStateToProps = (state: StoreState) => ({
  cart: state.cart,
})

const connector = connect(mapStateToProps, { setCartVisibility })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartIcon)
