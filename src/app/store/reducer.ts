import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  incrementProduct,
  decrementProduct,
  removeProduct,
  changeProductQuantity,
} from './actions';

export const initialState: { id: number; quantity: number }[] = [];

export const storeReducer = createReducer(
  initialState,
  on(addProduct, (state, action) => {
    const foundProduct = state.find((x) => x.id === action.id);
    if (foundProduct) {
      return state.map((p) => {
        if (p.id === action.id) {
          return { ...p, quantity: p.quantity + action.quantity };
        }
        return p;
      });
    }
    return state.concat([{ id: action.id, quantity: action.quantity }]);
  }),
  on(removeProduct, (state, action) => {
    return state.filter((p) => p.id !== action.id);
  }),
  on(decrementProduct, (state, action) => {
    return state.map((p) => {
      if (p.id === action.id) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
  }),
  on(incrementProduct, (state, action) => {
    return state.map((p) => {
      if (p.id === action.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
  }),
  on(changeProductQuantity, (state, action) => {
    if (+action.quantity === 0) {
      return state.filter((p) => p.id !== action.id);
    }
    return state.map((p) => {
      if (p.id === action.id) {
        return {
          ...p,
          quantity: action.quantity,
        };
      }
      return p;
    });
  })
);
