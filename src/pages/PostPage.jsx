import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
// import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from  "../store/todoSlise";



const PostPage = () => {

  
const { title } = useParams();
const dispatch = useDispatch();
const todos = useSelector(state => state.todos.todos);

const [currentTodo, setSurrentTodo] = useState({})

useEffect(() => {
 dispatch(fetchTodos());
 
  },[]); 

  useEffect(() => {
  todos.forEach(todo => {
  if(todo.title === title) setSurrentTodo(todo);
});
  },[todos]);


return (
          
  <div className="app-body-page"> 
  
  <div className="card-title-page">
    <h5 className="title-page">{currentTodo.title}</h5>
  </div>
  <div className="card-img-page">
    <img className="img-page" src={currentTodo.imageUrl} alt="Card image cap" />
  </div>
  <div className="card-desc-page">
    <p className="desc-page">{currentTodo.description}</p>
  </div>
  <div className="card-comment-page">
    <p className="coment-page">{currentTodo.expertComment}</p>
  </div>
  </div>
  
      
   );
}
export default PostPage;