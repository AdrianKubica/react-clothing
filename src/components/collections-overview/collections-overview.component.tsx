import React from "react"

import "./collections-overview.styles.scss"
import { useSelector } from "react-redux"
import { selectCollectionForOverview } from "../../store/shop/shop.selectors"
import { CollectionPreview } from "../collection-preview/collection-preview.component"

export const CollectionOverview = () => {
  const collections = useSelector(selectCollectionForOverview)
  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}
