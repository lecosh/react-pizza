import React from 'react'
import ContentLoader from "react-content-loader"

export function PizzaLoadingBlock() {
  return (
    <ContentLoader 
        className='pizza-block'
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        >   
        <circle cx="130" cy="130" r="130" /> 
        <rect x="0" y="319" rx="6" ry="6" width="280" height="83" /> 
        <rect x="0" y="418" rx="3" ry="3" width="89" height="27" /> 
        <rect x="0" y="280" rx="0" ry="0" width="280" height="25" /> 
        <rect x="129" y="410" rx="30" ry="30" width="151" height="44" />
    </ContentLoader>
  )
}