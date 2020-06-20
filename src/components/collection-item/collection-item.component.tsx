import React from "react"
import "./collection-item.styles.scss"
import { IShopItem } from "../../pages/shop/shop.component"
import { CustomButton } from "../custom-button/custom-button.component"
import { connect, ConnectedProps } from "react-redux"
import { addCartItem } from "../../store/cart/cart.actions"

const CollectionItem = ({ id, name, price, imageUrl, addCartItem }: IShopItem & PropsFromRedux) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton inverted onClick={() => addCartItem({name, price})}>ADD TO CART</CustomButton>
  </div>
)

const connector = connect(null, { addCartItem })
type PropsFromRedux = ConnectedProps<typeof connector>

export default connect(null, { addCartItem })(CollectionItem)
