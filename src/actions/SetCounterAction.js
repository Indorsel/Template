export function setCounter(counter) {
  return { 
    type: 'SET_COUNTER',
    payload: {
      counter,
    }
  }
}
