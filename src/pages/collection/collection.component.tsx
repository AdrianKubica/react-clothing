import React from "react"
import "./collection.styles.scss"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCollection } from "../../store/shop/shop.selectors"
import CollectionItem from "../../components/collection-item/collection-item.component"

export const CollectionPage = () => {
  const { collectionId } = useParams()
  const { title, items } = useSelector(selectCollection(collectionId))!!
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
