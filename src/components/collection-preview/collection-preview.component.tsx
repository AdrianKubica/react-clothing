import React from "react"
import "./collection-preview.styles.scss"
import CollectionItem from "../collection-item/collection-item.component"
import { ShopCollectionDetail } from "../../store/shop/shop.types"
import { Link, useRouteMatch } from "react-router-dom"

export const CollectionPreview = ({ id, title, items, routeName }: ShopCollectionDetail) => {
  const match = useRouteMatch()
  return (
    <div className="collection-preview">
      <Link className="title" to={`${match.url}/${routeName}`}>
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  )
}
