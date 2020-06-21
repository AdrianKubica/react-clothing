import React from "react"
import "./cart-dropdown.styles.scss"
import { CustomButton } from "../custom-button/custom-button.component"
import { ConnectedProps, connect } from "react-redux"
import { StoreState } from "../../store/root.reducer"
import { CartItem } from "../cart-item/cart-item.component"
import { selectCartItems } from "../../store/cart/cart.selectors"
import { withRouter } from "react-router-dom"
import { RouteComponentProps } from "react-router"
import { toggleCartVisibility } from "../../store/cart/cart.actions"

const CartDropdown = ({ cartItems, history, match, dispatch }: PropsFromRedux & RouteComponentProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout")
        dispatch(toggleCartVisibility())
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)

const mapStateToProps = (state: StoreState) => ({
  cartItems: selectCartItems(state),
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(CartDropdown))
