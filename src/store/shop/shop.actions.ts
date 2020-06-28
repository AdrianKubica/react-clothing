import {
  ShopCollection,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { Dispatch, Action } from "redux"

export const fetchCollectionsStartAction = () => ({
  type: FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccessAction = (collectionsMap: ShopCollection) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailureAction = (errorMessage: string) => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})

export const fetchCollectionsStartAsyncAction = () => {
  return (dispatch: Dispatch<Action>) => {
    const collectionRef = firestore.collection("collections")
    dispatch(fetchCollectionsStartAction())
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccessAction(collectionMap))
      })
      .catch((error) => dispatch(fetchCollectionsFailureAction(error.message)))
  }
}
