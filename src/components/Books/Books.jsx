import React from 'react'
//import Comment from '../Comment/Comment'
import {useEffect, useState} from "react";



const Books = () => {
  const [books, setBook] = useState([])

    useEffect(()=>{
        fetch("http://hp-api.herokuapp.com/api/characters/house/gryffindor")
        .then(res=>res.json())
        .then((data) =>
        setBook(data)   
        )
    },[])
    console.log(books)

    // const allComments = books.map((book)=>{
    //   return( <Comment  key={book.id}
    //     name={book.name}
    //     location ={book.location}
    //     body = {book.reviews.map(review => {
    //         return review.body     
    //     })}
    //      user = {book.reviews.map(review => {
    //         return review.user.name

    //      })}

    //     />)
    // })
    // return(
    // <>
    // <div className="allComments">
    // {allComments}
    // </div>
    // </>
    // )
  



  
}

export default  Books;