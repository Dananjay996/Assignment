import React from 'react'
import './Center.css';

const Center = ({currCat, handleClickButton, clickChange}) => {
  return (
    <div className="card-wrapper">
      {
        Object.keys(localStorage).map(key => {
          // console.log('key is : ',key);
          const currObj = JSON.parse(localStorage.getItem(key));
          if(currObj.name === currCat){
            return (
              <div key={key} className="card">
                <h3>{currObj.name}</h3>
                <p>No of times Clicked : {currObj.clicks}</p>
                <img src={currObj.image} alt={currObj.name} />
                <button onClick = {handleClickButton} data-name={currObj.name}>Click To increase count</button>
              </div>  
            )
          }
        })
      }
      
    </div>
  )
}

export default Center
