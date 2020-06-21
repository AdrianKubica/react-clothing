import React from "react"
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component"
import "./shop.styles.scss"
import { useSelector } from "react-redux"
import { selectShopCollections } from "../../store/shop/shop.selectors"

export const ShopPage = () => {
  const collections = useSelector(selectShopCollections)
  return (
    <div className="shop-page">
      {collections.map((collection) => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  )
}
