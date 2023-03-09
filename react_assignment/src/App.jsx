import react, { useState } from 'react';
import './App.css'
import {LeftNav, Center, Form, Gallery} from './Components';

function App() {

  const [data,setData] = useState(false);
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [clicks,setClicks] = useState(0);
  const [currCat,setCurrCat] = useState("");
  const [clickChange, setClickChange] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    const details = {
      name : name,
      image : image,
      clicks : clicks
    }

    const countObj = localStorage.getItem('count');
    const count = JSON.parse(countObj).count;
    // console.log(count);

    localStorage.setItem(`cat-${count} details`,JSON.stringify(details));
    localStorage.setItem(`count`,JSON.stringify({count : count+1}));
    

   
    setName("");
    setImage("");
    setClicks(0);
    setData(false);
    // const countObj = {
    //   count : 0
    // }

    // localStorage.setItem('count',JSON.stringify(countObj));


  }

  const handleCatClick = (e) => {
    // console.log(e.target.attributes[0].value);
    const name = e.target.attributes[0].value;
    setCurrCat(name);
    let currObj = JSON.parse(localStorage.getItem(name));
    currObj = {...currObj, clicks : clicks + 1}
    localStorage.setItem(name,JSON.stringify(currObj));
  }

  const handleClickButton = (e) => {
    const name = e.target.attributes[0].value;
    console.log(e);
    // setCurrCat(name);
    // let currObj = JSON.parse(localStorage.getItem(name));
    // currObj = {...currObj, clicks : clicks + 1}
    // localStorage.setItem(name,JSON.stringify(currObj));
    // setClickChange(prevChange => !prevChange)
    Object.keys(localStorage).map(key => {
      let currObj = JSON.parse(localStorage.getItem(key));
      if(currObj.name === name){
        // console.log(key);
        const currClick = currObj.clicks;
        console.log(currClick);
        currObj = {...currObj, clicks : parseInt(currClick)+1};
        localStorage.setItem(key,JSON.stringify(currObj));
        setClickChange(prevChange => !prevChange);
      }
    })

  }
 
  return (
    <div className="App">
      <div className="heading">Cat Clicker App</div>
      <div className="content-wrapper">
        <LeftNav data= {data}/>
        <Center  currCat = {currCat} handleClickButton= {handleClickButton}  clickChange={clickChange}/>
        <Form setName={setName} setClicks={setClicks} setImage={setImage} handleSave={handleSave} setData={setData} name={name} clicks={clicks} image={image} />
      </div>
      <Gallery data={data} handleCatClick= {handleCatClick}/>
      {/* {localStorage.clear()} */}
    </div>
  )
}

export default App
