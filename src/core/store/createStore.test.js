import {createStore} from './createStor'
const initialState = {
  count: 0
}

const reducer = (state = initialState, action) =>{
  if (action.type === 'ADD') {
    return {...state, count: state.count+1}
  }
  return state
}


describe('createStore', ()=> {
  let store
  let handler
  beforeEach(()=>{
    store = createStore(reducer, initialState)
    handler=jest.fn()
  })
  test('должен вернуть объект стор', ()=> {
    expect(store).toBeDefined()
    expect(store.dispatch).toBeDefined()
    expect(store.subscribe).toBeDefined()
    expect(store.getState).not.toBeUndefined()
  })
  test('должен получить дефолтный стэйт', ()=>{
    expect(store.getState()).toBeInstanceOf(Object)
  })
  test('должен изменять состояние если есть экшн', ()=>{
    store.dispatch({type: 'ADD'})
    expect(store.getState().count).toBe(1)
  })
  test('должна вызвать функцию подписчик', () => {
    store.subscribe(handler)
    store.dispatch({type: 'ADD'})
    expect(handler).toHaveBeenCalled()
    expect(handler).toHaveBeenCalledWith(store.getState())
  })

  test('дизлайк, отписка', ()=>{
    const sub = store.subscribe(handler)
    sub.unsubscribe()

    expect(handler).not.toHaveBeenCalled()
  })
  test('проверка асинхрона', ()=> {
    return new Promise( resolve => {
      setTimeout( ()=>{
        store.dispatch({type: 'ADD'})
      }, 500)
      setTimeout(()=>{
        expect(store.getState().count).toBe(1)
        resolve()
      }, 1000)
    })
  })
})
