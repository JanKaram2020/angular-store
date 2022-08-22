import {
  ActionReducer,
  ActionReducerMap,
  createReducer,
  MetaReducer,
} from '@ngrx/store';
import { storeReducer } from './reducer';
import { localStorageSync } from 'ngrx-store-localstorage';
const dataReducer = createReducer({
  jan: '',
});
export const reducers: ActionReducerMap<any> = {
  cart: storeReducer,
  data: dataReducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['cart'], rehydrate: true })(reducer);
}
export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];
