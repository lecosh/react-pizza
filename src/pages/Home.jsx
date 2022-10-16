import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

const categories = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'},  {name: 'алфавиту', type: 'alphabet'}]

export function Home(){
  const dispatch = useDispatch()
  const { items } = useSelector(({ filter, pizzas }) => {
    return{
      items: pizzas.items 
    }
  })
  const onSelectedCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, [])
  return(
    <div className="container">
      <div className="content__top">
          <Categories 
          onClickItem={onSelectedCategory}
          items={categories} />
          <SortPopup items={[
            {name: 'популярности', type: 'popular'},
            {name: 'цене', type: 'price'}, 
            {name: 'алфавиту', type: 'alphabet'}]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items && items.map((obj) => <PizzaBlock key={obj.id} {...obj}  />)
        }
      </div>
    </div>
  )
}