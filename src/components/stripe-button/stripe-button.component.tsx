import React from "react"

import StripeCheckout, { Token } from "react-stripe-checkout"

export interface ProductPrice {
  price: number
}

export const StripeCheckoutButton = ({ price }: ProductPrice) => {
  const priceForStripe = price * 100
  const publishableKey =
    "pk_test_51Gwa76BpJKXbCaK4RtdqISkbJnsVjz06HBDNvrstRgJaLIp11a0nuN6ig9X8qF2YJPdo73pGR6Y4WKr0qXQLd7zA00HhhOVWTd"
  const onToken = (token: Token) => {
    console.log(token)
    alert("Payment Successful")
  }
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
