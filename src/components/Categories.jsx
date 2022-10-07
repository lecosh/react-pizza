import React from 'react'

export function Categories({ items, onClickItem }){
   return(
    <div className="categories">
        <ul>
            <li className="active">Все</li>
            {items.map((element, index) => (
                <li onClick={() => onClickItem(element)} key={`${element}_${index}`}>{element}</li>
            ))}
        </ul>
    </div>
   )
}