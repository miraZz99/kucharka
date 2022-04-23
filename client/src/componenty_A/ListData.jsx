import React from "react"
import '../App.css';
import { Popup } from "../components";



export default function ListData(props){

    

   let books= props.books
   console.log(books);
    return(
        <div className="ol">
        { books.length >0 && books.map((book,index)=> {
            return <div className="border" key={index}>{book.name} 
        
            </div>
        })}
    </div>
    )
}