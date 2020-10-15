const initialState = {
  isRender: false,
}

export function SquareReducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_IS_RENDER':
      return {...state, isRender: action.payload.isRender}

    default: 
      return state
  }
}