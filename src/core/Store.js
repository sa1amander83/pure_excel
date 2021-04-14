export function Store(rootReducer, initialState) {
  let state = {}
  let listeners = []
  return {

    subscribe(fn) {
      listeners.push(fn)
      return {
        unscubscribe() {
          listeners= listeners.filter(l=>l !==fn)
        }
      }
    },
    dispatch(action) {
      state = rootReducer(state, action)
      listeners.forEach(listener => listener(state))
    },
    getState() {
      return state
    }
  }
}
