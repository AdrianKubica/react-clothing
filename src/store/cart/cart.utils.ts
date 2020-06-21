import { ShopItem } from "../shop/shop.types"
export const addItemToCart = (cartItems: ShopItem[], cartItemToAdd: ShopItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity! + 1 } : cartItem
    )
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems: ShopItem[], cartToRemove: ShopItem) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartToRemove.id)

  if (existingCartItem?.quantity === 1) {
    return clearItemFromCart(cartItems, cartToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartToRemove.id ? { ...cartItem, quantity: cartItem.quantity! - 1 } : cartItem
  )
}

export const clearItemFromCart = (cartItems: ShopItem[], id: number) =>
  cartItems.filter((cartItem) => cartItem.id !== id)
