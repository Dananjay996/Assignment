import React from 'react'
import './Gallery.css';

const Gallery = ({data,handleCatClick}) => {
  return (
    <div>
      { (localStorage.length - 1 > 0) &&
        <div>
          {
            Object.keys(localStorage).map((key) => {
              if(key !== 'count'){
                const catDetails = JSON.parse(localStorage.getItem(key));
                return (
                  <div key={key}>
                    <h3>Name : {catDetails.name}</h3>
                    <p>Clicks : {catDetails.clicks}</p>
                    <img src={catDetails.image} alt={catDetails.name}/>
                    <button onClick={handleCatClick} data-name={catDetails.name}>Display Cat</button>

                  </div>
                )
              }
            })
            
          }

        </div>  
      }
    </div>
  )
}

export default Gallery
