import React from "react"
import "./collection-preview.styles.scss"
import { IShopCollection } from "../../pages/shop/shop.component"
import CollectionItem from "../collection-item/collection-item.component"

export const CollectionPreview = ({ id, title, items, routeName }: IShopCollection) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)
