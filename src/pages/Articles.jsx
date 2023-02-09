import { useState, useEffect } from "react";
import axios from 'axios';
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from  "../store/todoSlise";
import { key } from "./randomKey";



const Articles = () => {

const dispatch = useDispatch();
const todos = useSelector(state => state.todos.todos);
const showingPosts = todos ? todos.slice(0) : [];    
useEffect(() => {
   dispatch(fetchTodos());
  },[dispatch]); 

console.log();
  return (

  <div className="app-body"> 
      {
        todos.map(({title, description, imageUrl,id},index) => {
        return <Card title={title} description={description} imageUrl={imageUrl} key={index} id={index}/>;
        
        })}
   
  </div>
  );
};

export default Articles;