import React, { useEffect, useState } from 'react';


const Recepies =({rlabel, rimg, calories, ig})=> {

    return (
      <div>
        <h1>{rlabel}</h1>
        <img src={rimg} alt ="" />
        <h1>{calories}</h1>
        <h3> {ig}</h3>
      </div>
    )
     
}

export default Recepies ;