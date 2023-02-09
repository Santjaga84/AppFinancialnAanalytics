import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { pagesArticle,fetchTodos,addTodo } from  "../store/todoSlise";
import { key } from "react";


const PostPage = () => {

 const { title } = useParams();
 const { imageUrl } = useParams();
 const { description } = useParams();
const dispatch = useDispatch();
const todos = useSelector(state => state.todos.todos);
const showingPosts = todos ? todos.slice(0) : [];   

todos.forEach(function(elem){
  title = title;
  title = todos.description;
  title = todos.imageUrl;
  
});


useEffect(() => {
   dispatch(fetchTodos());
  },[dispatch]); 

console.log(title);
console.log(todos.imageUrl);
  return (

  <div className="app-body"> 
         <div className="card" >
   <div>
    <img className="card-img-top" src={imageUrl} alt="Card image cap" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      
          
         
    </div>
    </div>
             
   
  </div>
  );
}
export default PostPage;