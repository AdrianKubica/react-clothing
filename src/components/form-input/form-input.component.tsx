import React from "react"

import "./form-input.styles.scss"

interface IFormInput {
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  value: string
}

export const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: IFormInput & React.InputHTMLAttributes<HTMLInputElement>) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? <label className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>{label}</label> : null}
  </div>
)
