import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({title,imageUrl}) => {

  
  // const todos = useSelector(state => state.todos.todos);
  
  return (
     <Link to={`/posts/${title}`} className="btn-prLink">
     <div className="card" >
     <div>
    <img className="card-img" src={imageUrl} alt="Card image cap" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{}</p>
      
    </div>
    </div>
    </Link>
  );
};

export default Card;