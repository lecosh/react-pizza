import axios from 'axios';


export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => {dispatch(setPizzas(data))})

    
}
export function setPizzas(items){
    return {
        type: "SET_PIZZAS",
        payload: items
    }
}
export function setLoaded(val){
    return{
        type: 'SET_LOADING',
        payload: val
    }
}