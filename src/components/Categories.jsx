import React, { useState } from 'react'

export const Categories = React.memo(function Categories({ items, onClickItem }){
    const [activeItem, setActiveItem] = useState(0)
    
    function onSelectedItem(index){
        setActiveItem(index)
        onClickItem(index)
    }

    return(
        <div className="categories">
            <ul>
                {items.map((element, index) => (
                    <li
                        onClick={() => onSelectedItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={`${element}_${index}`}>{element}   
                    </li>
                ))}
            </ul>
        </div>
   )
})