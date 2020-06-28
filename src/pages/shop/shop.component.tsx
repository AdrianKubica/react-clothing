import React, { useEffect } from "react"
import "./shop.styles.scss"
import { CollectionOverview } from "../../components/collections-overview/collections-overview.component"
import { Route, useRouteMatch } from "react-router-dom"
import { CollectionPage } from "../collection/collection.component"
import { useSelector, useDispatch } from "react-redux"
import { WithSpinner } from "../../components/with-spinner/with-spinner.component"
import { selectIsCollectionFetching, selectIsCollectionLoaded } from "../../store/shop/shop.selectors"
import { fetchCollectionsStartAsyncAction } from "../../store/shop/shop.actions"

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

export const ShopPage = () => {
  const match = useRouteMatch()
  const isCollectionFetching = useSelector(selectIsCollectionFetching)
  const isCollectionLoaded = useSelector(selectIsCollectionLoaded)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCollectionsStartAsyncAction())
  }, [])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props} />}
      />
    </div>
  )
}
