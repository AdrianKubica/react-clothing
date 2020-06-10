import React, { FormEvent } from "react"
import "./sign-in.styles.scss"
import { FormInput } from "../form-input/form-input.component"
import { CustomButton } from "../custom-button/custom-button.component"
import { signInWithGoogle, auth } from "../../firebase/firebase.utils"

interface IState {
  email: string
  password: string
}

export class SignIn extends React.Component<{}, IState> {
  readonly state: IState = {
    email: "",
    password: "",
  }

  handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.currentTarget
    this.setState({ [name]: value } as Pick<IState, keyof IState>)
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name="email" type="email" value={email} handleChange={this.handleChange} label="Email" required />
          {/* <label>Password</label> */}
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            required
            handleChange={this.handleChange}
            autoComplete="on"
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
