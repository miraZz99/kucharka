import React from "react"
import '../App.css';
import DeleteRecipe from "./DeleteRecipe";
import StarRating from "./StarRating";
import "./style.css"



export default function ListData(props){

const {setBooks, books }=props

    return(
        <div className="ol">
        { books.length >0 && books.map((book,index)=> {
        
                return <div className="border" key={index} >{book.name}
            <div> {book._id}</div>
            <div > <DeleteRecipe remove ={book._id}  books={books} setBooks={setBooks} /> </div>
          <div> 
          </div>
        <i className="fa-solid fa-pen"></i>
        <div> <StarRating _id={book._id} /> </div>
            </div>
        })}
    </div>
    )
}