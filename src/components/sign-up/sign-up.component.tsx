import React from "react"
import "./sign-up.styles.scss"
import { FormInput } from "../form-input/form-input.component"
import { CustomButton } from "../custom-button/custom-button.component"
import { createUserProfileDocument, auth } from "../../firebase/firebase.utils"

interface IState {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export class SignUp extends React.Component<{}, IState> {
  readonly state: IState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault()
    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      return alert("passwords don't match")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    this.setState({ [name]: value } as Pick<IState, keyof IState>)
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className="sign-up">
        <h2 className="title">I dont have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput type="email" name="email" value={email} handleChange={this.handleChange} label="Email" required />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
            autoComplete="on"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm password"
            required
            autoComplete="on"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}
