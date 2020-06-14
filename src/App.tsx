import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import "./App.scss"
import { HomePage } from "./pages/homepage/homepage.component"
import { ShopPage } from "./pages/shop/shop.component"
import Header from "./components/header/header.component"
import { AuthPage } from "./pages/auth/auth.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { Unsubscribe } from "firebase"
import { connect, ConnectedProps } from "react-redux"
import { setCurrentUser } from "./store/user/user.actions"
import { User, SetCurrentUserAction } from "./store/user/user.types"
import { Dispatch } from "redux"

class App extends React.Component<PropsFromRedux> {
  unsubscribeFromAuth!: Unsubscribe

  componentDidMount() {
    const { setCurrentUser }: any = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef?.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() })
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/auth" render={() => (this.props.currentUser ? <Redirect to="/" /> : <AuthPage />)} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }: { user: User }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch: Dispatch<SetCurrentUserAction>) => ({
  setCurrentUser: (user: User) => dispatch(setCurrentUser(user)),
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(App)
