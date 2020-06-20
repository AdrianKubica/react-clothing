import { ToggleCartVisibilityAction, TOGGLE_HIDDEN, ADD_ITEM, AddCartItemAction } from "./cart.types"
import { IShopItem } from "../../pages/shop/shop.component"

export const toggleCartVisibility = (): ToggleCartVisibilityAction => ({
  type: TOGGLE_HIDDEN,
})

export const addCartItem = (item: IShopItem): AddCartItemAction => ({
  type: ADD_ITEM,
  payload: item,
})
