import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer, RootState } from './RootReducer';

export const store = configureStore({
    reducer: rootReducer
})


export const useTypedSelector: TypedUseSelectorHook<
  RootState
> = useSelector;

export type AppDispatch = typeof store.dispatch;
