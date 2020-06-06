import React from "react"
import "./collection-item.styles.scss"
import { IShopItem } from "../../pages/shop/shop.component"

export const CollectionItem = ({ id, name, price, imageUrl }: IShopItem) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      {name}
    </div>
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
)
