const initialState = {
  counter: 0,
}

export function ColumnRowsReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_COUNTER': 
      return {...state, counter: action.payload.counter}

    default: 
      return state
  }
}