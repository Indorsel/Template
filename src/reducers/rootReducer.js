import { combineReducers } from 'redux'
import { LayoutReducer } from './LayoutReducer'
import { StartGameReducer }  from './StartGameReducer'
import { ColumnRowsReducer } from './ColumnRowsReducer'
import { SquareReducer } from './SquareReducer'

export const initialState = {}

export const rootReducer = combineReducers({
  layout: LayoutReducer,
  startGame: StartGameReducer,
  columnRows: ColumnRowsReducer,
  square: SquareReducer,
})