import React, { useEffect, useState } from "react"
import "./shop.styles.scss"
import { CollectionOverview } from "../../components/collections-overview/collections-overview.component"
import { Route, useRouteMatch } from "react-router-dom"
import { CollectionPage } from "../collection/collection.component"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { useDispatch } from "react-redux"
import { shopUpdateCollectionAction } from "../../store/shop/shop.actions"
import { WithSpinner } from "../../components/with-spinner/with-spinner.component"

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

export const ShopPage = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  let unsubscribeFromSnapshot = null

  useEffect(() => {
    const collectionRef = firestore.collection("collections")
    unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot)
      dispatch(shopUpdateCollectionAction(collectionMap))
      setLoading(false)
    })
  }, [])

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  )
}
