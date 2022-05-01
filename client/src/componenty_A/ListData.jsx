import React from "react"
import '../App.css';
import DeleteRecipe from "./DeleteRecipe";
import "./style.css"



export default function ListData(props){

const {setBooks, books }=props

    return(
        <div className="ol">
        { books.length >0 && books.map((book,index)=> {
            //     console.log(book.ingridiences);
            //     let ingridiences = book.ingridiences;
            //     let mappp= ingridiences.map(e=>{e.count})
            // console.log(mappp);
                return <div className="border" key={index} >{book.name}
            <div> {book.author}</div>
            <div > <DeleteRecipe remove ={book._id}  books={books} setBooks={setBooks} /> </div>
          <div> 
          </div>
        <i className="fa-solid fa-pen"></i>
            </div>
        })}
    </div>
    )
}