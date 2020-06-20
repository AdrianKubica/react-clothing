import React from "react"
import "./custom-button.styles.scss"

interface IButton {
  isGoogleSignIn?: boolean
  inverted?: boolean
}

export const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement> & IButton) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}  ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  )
}
