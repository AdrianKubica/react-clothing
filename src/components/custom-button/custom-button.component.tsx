import React from "react"
import "./custom-button.styles.scss"

interface IButton {
  isGoogleSignIn?: boolean
}

export const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & IButton) => {
  console.log(isGoogleSignIn)
  return (
    <button className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}
