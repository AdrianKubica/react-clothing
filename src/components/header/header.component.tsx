import React from "react"

import { ReactComponent as Logo } from "../../assets/img/logo.svg"

import { auth } from "../../firebase/firebase.utils"
import { connect, ConnectedProps } from "react-redux"
import CartIcon from "../cart-icon/cart-icon.component"
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { selectCurrentUser } from "../../store/user/user.selector"
import { selectCartVisibility } from "../../store/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { StoreState } from "../../store/root.reducer"
import { Cart } from "../../store/cart/cart.types"
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles"

interface IUser {
  currentUser: firebase.User | null
}

const Header = ({ currentUser, visible }: PropsFromRedux) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/auth">SIGN IN</OptionLink>
      )}
      <CartIcon />
      {visible && <CartDropdown />}
    </OptionsContainer>
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector<StoreState, IUser & Pick<Cart, "visible">>({
  currentUser: selectCurrentUser,
  visible: selectCartVisibility,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
