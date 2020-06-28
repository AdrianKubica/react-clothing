import React from "react"
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles"

export const WithSpinner = (WrappedComponent: any) => ({ isLoading, ...otherProps }: any) =>
  isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  )
