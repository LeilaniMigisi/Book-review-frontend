import React, { useState, useEffect } from 'react'
import './Reviews.css'
// import {FaTrash, FaEdit} from "react-icons/fa"

function Reviews(){
    const [comments, setComments] =useState([])
    const[formData, setFormData] = useState({
        name:"",
        location:"", 
    })
    useEffect(()=>{
        fetch("https://rack-hosting-1.herokuapp.com/restaurants")
        .then((res)=> res.json())
        .then((data) =>{
         setComments(data)
        },[comments,setComments])
        
    });

    const allComments = comments.map((comment) =>{
        return (
           <div key={comment.id} className="displayComment">
                 <p >Name:  {comment.name}</p>
                 <p >Location:  {comment.location}</p>
                 <button>Delete</button>
                 <button>Edit</button>
                 
           </div>
           
        )
    })


    //Handle Change and submit
    function handleCommentChange(e){
        setFormData({
            ...formData, [e.target.name]:e.target.value
          });
    }
    function handleSubmit(e){
        e.preventDefault();
        const createdComment ={
          name:formData.name,
          location:formData.location
        };
    
        fetch("https://rack-hosting-1.herokuapp.com/restaurants",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(createdComment),
        })
        .then(res => res.json())
        .then(newp =>{
            const newComments =  [...comments, newp]
            setComments(newComments);
            setFormData({
              ...formData,
              name:"",
              location:""
            })
        })
      }
      
    return(

     <div className="commentForm">
         <h1>Resturants</h1>
         <h1>Add Restuarant</h1>
         <form className="updateForm">
         <textarea value={formData.name} placeholder="Name" name="name" onChange={handleCommentChange} rows="4" ></textarea><br/>
         <input value={formData.location} placeholder="Location" name="location"  onChange={handleCommentChange}></input><br/>
         <input type="submit"className="submit"  onClick={handleSubmit}/>
         </form>
         <hr></hr>
         <div className='res'>
         {allComments}
         </div>
     </div>
     )
}
export default Reviews