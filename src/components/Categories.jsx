import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }){
    return(
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>Все</li>
                {items && 
                    items.map((element, index) => (
                        <li
                            onClick={() => onClickItem(index)}
                            className={activeCategory === index ? 'active' : ''}
                            key={`${element}_${index}`}>{element}   
                        </li>
                ))}
            </ul>
        </div>
   )
})

Categories.propTypes = {
    // activeCategory: PropTypes.oneOf([PropTypes.number.isRequired, null]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickItem: PropTypes.func
}
Categories.defaultProps = { activeCategory: null, items: []}
