import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import counterReducer from '../components/counter/counterSlice'
import { createWrapper } from './withRedux'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export const wrapper = createWrapper<AppStore>(makeStore)
