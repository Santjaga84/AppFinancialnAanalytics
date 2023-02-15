import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Card = ({title,imageUrl,id}) => {

  
  return (
     <Link to={`/posts/${id}`} className="btn-prLink">
     <div className="card" >
     <div>
    <img className="card-img" src={imageUrl} alt="Card image cap" />
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{title}</p>
      
    </div>
    </div>
    </Link>
  );
};

export default Card;