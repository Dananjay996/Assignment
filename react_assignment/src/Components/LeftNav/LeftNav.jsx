import React from 'react'
import './LeftNav.css';

const LeftNav = () => {

  // const [count,setCount] = useState(0);

  const handleCatClick = () => {

  }
  
  return (
    <div className="main_wrapper_container">
      { (localStorage.length - 1 > 0) &&
        <div className="main_wrapper-cats">
          {
            Object.keys(localStorage).map((key) => {
              if(key !== 'count'){
                const catDetails = JSON.parse(localStorage.getItem(key));
                return (
                  <div key={key} className="text">
                    <h3>{catDetails.name}</h3>
                    <p className="bg">{catDetails.clicks}</p>

                  </div>
                )
              }
            })
            
          }

        </div>  
      }
      {
        !(localStorage.length - 1) &&
          <div className="main_wrapper">
            NO Cats are found!
          </div>  
      }
      
    </div>
  )
}

export default LeftNav
