import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas'

const categories = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular', order: 'desc'}, {name: 'цене', type: 'price', order: 'desc'},  {name: 'алфавиту', type: 'name', order: 'asc'}]

export function Home(){
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas }) => pizzas.items )
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
  const { sortBy, category } = useSelector(({ filter }) => filter)

  const onSelectedCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  const onSelectedSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  React.useEffect(()=>{
    dispatch(fetchPizzas(category, sortBy))
  }, [category, sortBy])

  return(
    <div className="container">
      <div className="content__top">
          <Categories 
          activeCategory={category}
          onClickItem={onSelectedCategory}
          items={categories} />
          <SortPopup activeSortType={sortBy.type} items={sortItems} onClickSortType={onSelectedSortType} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded
          ? items.map((obj) => <PizzaBlock key={obj.id} isLoading={true} {...obj}  />) 
          : Array(10).fill(0).map((_, index) =>(<PizzaLoadingBlock key={index}/>))
        }

      </div>
    </div>
  )
}