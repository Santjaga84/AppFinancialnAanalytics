import { useEffect } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addPages } from  "../store/articleSlise";


const Articles = () => {

const dispatch = useDispatch();

const pages = useSelector(state => state.pages.pages);

useEffect(() => {
   dispatch(addPages());
   },[]); 


 return (

  <div className="app-body"> 
      {
        pages.map(({title, description, imageUrl,id}) => {
        return <Card title={title} description={description} imageUrl={imageUrl} key={id} id={id}/>;
        
        })}
   
  </div>
  );
};

export default Articles;