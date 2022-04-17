import React, { useEffect, useState } from 'react'
import './recipes.css';

export default function CookBookList(){
  const [books, setBooks] = useState([])
  const [input, setInput] = useState("")

  const handlerEnter = (e)=>{
      if (e.key ==="Enter"){
          setBooks([...books,input])
          setInput("")
      }
  }

  useEffect(()=>{
      fetch("/recipe/list")
      .then(response => response.json())
      .then (data => setBooks(data.result))
  },[])

  return(
      <div className='cookbook__recipes-test'>
         <h1>List of topic:</h1> 
         {/* <input type="text" placeholder="Ented topic" onChange={(e)=>setInput(e.target.value)} value={input}   onKeyDown={handlerEnter}></input> */}
        <div className='ol'>
             { books.length >0 && books.map((book,index)=> {
                 return <li className='border' key={index}>{book.name} </li>
             })}
        </div> 
       

      </div>
      
  )

}

// async function apiSearch (){
//     const data= await axios.get('http://localhost:8080/recip/list')
//     console.log(data);
//     return data.data
// }