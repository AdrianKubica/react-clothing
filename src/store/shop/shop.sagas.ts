import { takeEvery, call, put } from "redux-saga/effects"
import { FETCH_COLLECTIONS_START } from "./shop.types"
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import { fetchCollectionsSuccessAction, fetchCollectionsFailureAction } from "./shop.actions"

export function* fetchCollectionAsync() {
  yield console.log("I am fired")

  try {
    const collectionRef = firestore.collection("collections")
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccessAction(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailureAction(error))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionAsync)
  console.log("FAJNIE")
}
