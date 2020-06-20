import React from "react"
import "./cart-dropdown.styles.scss"
import { CustomButton } from "../custom-button/custom-button.component"
import { ConnectedProps, connect } from "react-redux"
import { StoreState } from "../../store/root.reducer"
import { CartItem } from "../cart-item/cart-item.component"

const CartDropdown = ({ cartItems }: PropsFromRedux) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({ cart: { cartItems } }: StoreState) => ({
  cartItems,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(CartDropdown)
