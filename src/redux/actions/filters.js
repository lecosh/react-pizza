export function setSortBy(name){
    return {
        type: "SET_SORT_BY",
        payload: name
    }
}

export function setCategory(index){
    return {
        type: "SET_CATEGORY",
        payload: index
    }
}