const initialState = {
  sizeValue: "0",
}

export function StartGameReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_SIZE_VALUE':
      return { ...state, sizeValue: action.payload.sizeValue }
    
    default: 
      return state
  }
}