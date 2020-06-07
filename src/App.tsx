import React from "react"
import { Route, Switch } from "react-router-dom"
import "./App.scss"
import { HomePage } from "./pages/homepage/homepage.component"
import { ShopPage } from "./pages/shop/shop.component"
import { Header } from "./components/header/header.component"
import { AuthPage } from "./pages/auth/auth.component"
import { auth } from "./firebase/firebase.utils"
import { Unsubscribe } from "firebase"

class App extends React.Component {
  readonly state = {
    currentUser: null,
  }

  unsubscribeFromAuth!: Unsubscribe

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/auth" component={AuthPage} />
        </Switch>
      </div>
    )
  }
}

export default App
