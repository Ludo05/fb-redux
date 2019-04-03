import { createStore } from 'redux'
// import { createStore } from '../redux/createStore'
import reducers from '../reducers'

export const configureStore = () => {
  return createStore(reducers)
}
