const initialState = {
  list: [],
}

export function LayoutReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_LIST':
      return { ...state, list: action.payload.list }
    
    default: 
      return state
  }
}