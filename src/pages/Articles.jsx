import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from  "../store/todoSlise";




const Articles = () => {

const dispatch = useDispatch();
const todos = useSelector(state => state.todos.todos);
// const showingPosts = todos ? todos.slice(0) : [];    
useEffect(() => {
   dispatch(fetchTodos());
  },[dispatch]); 

console.log();
  return (

  <div className="app-body"> 
      {
        todos.map(({title, description, imageUrl,id},index) => {
        return <Card title={title} description={description} imageUrl={imageUrl} key={index} id={id}/>;
        
        })}
   
  </div>
  );
};

export default Articles;