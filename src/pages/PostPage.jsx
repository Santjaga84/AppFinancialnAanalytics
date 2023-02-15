import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPages } from  "../store/articleSlise";


const PostPage = () => {
  
const { id } = useParams();
const dispatch = useDispatch();

const pages = useSelector(state => state.pages.pages);
const [currentTodo, setCurrentTodo] = useState({})

useEffect(() => {
 dispatch(addPages());
 
  },[]); 


useEffect(() => {

pages.forEach(page => {
  if(page.id === id ) setCurrentTodo(page);
});
},[pages]);


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