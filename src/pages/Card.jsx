import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PostPage from "./PostPage";


const Card = ({title, description,imageUrl, id},index) => {

  
  const todos = useSelector(state => state.todos.todos);
  
  return (
     <Link to={`/posts/${title}`} className="btn btn-prLink imary">
    <div className="card" >
   <div>
    <img className="card-img-top" src={imageUrl} alt="Card image cap" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      
          
         
    </div>
    </div>
    </Link>
  );
};

export default Card;