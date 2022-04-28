import React from "react"
import '../App.css';
import "./style.css"




export default function ListData(props){

    

   let books= props.books
   console.log(books);
    return(
        <div className="ol">
        { books.length >0 && books.map((book,index)=> {
            return <div className="border" key={index} >{book.name} 
        <i class="fa-solid fa-trash"></i>
        <i class="fa-solid fa-pen"></i>
            </div>
        })}
    </div>
    )
}