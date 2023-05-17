import React, { useState } from 'react'
import Data from "../data/data.json"
import ClothesDetail from './ClothesDetail'
//import "../styles/Layout.module.css"

const clothes = () => {
const [data, setdata]=useState(Data)
  return (
    
    <div style={{ marginTop:"10px",display:"flex",width:"100%",justifyContent:"space-between",flexWrap:"wrap"}}>  
    
      {data.map((el, i) => (
      <ClothesDetail el={el} key={i}  />
    )).reverse()}
    </div>
    
  )
}

export default clothes
