import { createSelector } from '@ngrx/store';

export const selectCart = createSelector(
  // @ts-ignore

  (state) => state.cart,
  (cart) => cart
);
