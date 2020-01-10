import React, { useEffect, useState } from 'react';
import Recepies from './Recepies.js'


function App() {

  const [counter, setCount] = useState(0);
  const [recepies, setRecepies] = useState([]);   
  const [search, setSearch] =useState(""); 

  useEffect(() =>{
    getReceipies();
    },[])
 
    

 const getReceipies = async () => {
 const response  = await fetch("https://api.edamam.com/search?q=chicken&app_id=68ec06cc&app_key=21469a7b50d1a80183182beebf1d6599&from=0&to=3&calories=591-722&health=alcohol-free");
 const jsonResponse = await response.json();
 console.log(jsonResponse.hits);
 setRecepies(jsonResponse.hits);
}
const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
}

  return (
    <div className="App">
      <input type="text" value={search} onChange={updateSearch} />
      <button >search</button>  
        {recepies.map(recipe=> ( <Recepies key={recipe.recipe.label} rlabel={recipe.recipe.label} rimg={recipe.recipe.image}  ig={recipe.recipe.ingredientLines}/>))}
         
    </div>
  );
}

export default App;
