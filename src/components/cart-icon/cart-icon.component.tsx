import React from "react"
import "./cart-icon.styles.scss"
import { ReactComponent as ShoppingIcon } from "../../assets/img/shopping-bag.svg"
import { toggleCartVisibility } from "../../store/cart/cart.actions"
import { connect, ConnectedProps } from "react-redux"
import { StoreState } from "../../store/root.reducer"
import { selectCartItemsCount } from "../../store/cart/cart.selectors"

const CartIcon = ({ itemCount, toggleCartVisibility }: PropsFromRedux) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
)

const mapStateToProps = (state: StoreState) => {
  return {
    itemCount: selectCartItemsCount(state),
  }
}

const connector = connect(mapStateToProps, { toggleCartVisibility })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartIcon)
