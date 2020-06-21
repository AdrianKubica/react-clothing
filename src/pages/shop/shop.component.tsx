import React from "react"
import "./shop.styles.scss"
import { CollectionOverview } from "../../components/collections-overview/collections-overview.component"
import { Route, useRouteMatch } from "react-router-dom"
import { CollectionPage } from "../collection/collection.component"

export const ShopPage = () => {
  const match = useRouteMatch()
  console.log(match)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}
