import React, { useState } from 'react'

export function Categories({ items, onClickItem }){
    const [activeItem, setActiveItem] = useState(null)
    return(
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
                {items.map((element, index) => (
                    <li
                        onClick={() => setActiveItem(index)}
                        className={activeItem === index ? 'active' : ''}
                        key={`${element}_${index}`}>{element}
                    </li>
                ))}
            </ul>
        </div>
   )
}