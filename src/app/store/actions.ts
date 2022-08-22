import { createAction, props } from '@ngrx/store';

export const addProduct = createAction(
  '[Products] add product',
  props<{ id: number; quantity: number }>()
);
export const removeProduct = createAction(
  '[Products] remove product',
  props<{ id: number }>()
);
export const decrementProduct = createAction(
  '[Products] decrease product',
  props<{ id: number }>()
);
export const incrementProduct = createAction(
  '[Products] increase product',
  props<{ id: number }>()
);
export const changeProductQuantity = createAction(
  '[Products] change quantity',
  props<{ id: number; quantity: number }>()
);
