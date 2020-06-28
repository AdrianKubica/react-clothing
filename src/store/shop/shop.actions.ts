import { UPDATE_COLLECTIONS, ShopCollection } from './shop.types';

export const shopUpdateCollectionAction = (collectionsMap: ShopCollection) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap
})