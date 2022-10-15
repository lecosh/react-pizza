import { combineReducers } from 'redux'
import filterReduser from './filters'
import pizzaReducer from './pizzas'


const rootReducer = combineReducers({
    filter: filterReduser,
    pizzas: pizzaReducer
})

export default rootReducer