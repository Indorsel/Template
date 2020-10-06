import { combineReducers } from 'redux'
import { StartGameReducer }  from './StartGameReducer'
import { LayoutReducer } from './LayoutReducer'

export const initialState = {}

export const rootReducer = combineReducers({
  startGame: StartGameReducer,
  layout: LayoutReducer,
})