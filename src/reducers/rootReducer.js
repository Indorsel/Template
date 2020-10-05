import { combineReducers } from 'redux'
import { StartGameReducer }  from './StartGameReducer'

export const initialState = {}

export const rootReducer = combineReducers({
  startGame: StartGameReducer,
})