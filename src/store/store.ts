import { Dispatch } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducer'

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = typeof store.dispatch | Dispatch<any>
