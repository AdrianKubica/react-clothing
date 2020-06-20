import React from "react"
import { SHOP_DATA } from "./shop.data"
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component"
import "./shop.styles.scss"

interface IState {
  collections: IShopCollection[]
}

export interface IShopCollection {
  id: number
  title: string
  routeName: string
  items: IShopItem[]
}

export interface IShopItem {
  id: number
  name: string
  imageUrl: string
  price: number
  quantity?: number
}

export class ShopPage extends React.Component<{}, IState> {
  readonly state: IState = {
    collections: SHOP_DATA,
  }

  render() {
    const { collections } = this.state
    return (
      <div className="shop-page">
        {collections.map((collection: IShopCollection) => (
          <CollectionPreview key={collection.id} {...collection} />
        ))}
      </div>
    )
  }
}
