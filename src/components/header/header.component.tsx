import React from "react"
import { Link } from "react-router-dom"

import { ReactComponent as Logo } from "../../assets/img/logo.svg"

import "./header.styles.scss"
import { auth } from "../../firebase/firebase.utils"
import { connect, ConnectedProps } from "react-redux"
import { StoreState } from "../../store/root.reducer"
import CartIcon from "../cart-icon/cart-icon.component"
import { CartDropdown } from "../cart-dropdown/cart-dropdown.component"

interface IUser {
  currentUser: firebase.User | null
}

const Header = ({ currentUser, visible }: PropsFromRedux) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/auth">
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {visible && <CartDropdown />}
    </div>
  </div>
)

const mapStateToProps = ({ user: { currentUser }, cart: { visible } }: StoreState) => ({
  currentUser,
  visible,
})

const connector = connect(mapStateToProps)
type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
