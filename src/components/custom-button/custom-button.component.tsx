import React from "react"
import "./custom-button.styles.scss"

export const CustomButton = ({ children, ...otherProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className="custom-button" {...otherProps}>
      {children}
    </button>
  )
}
