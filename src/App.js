import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Articles from './pages/Articles';
import './App.css';
import PostPage from "./pages/PostPage";
import { importData } from './todo';
import { useEffect } from 'react';
import { addPages } from  "./store/articleSlise";
import { useDispatch } from 'react-redux';
import {db} from './firebase';
import { addDoc, collection, query } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";

function App() {

  
  const dispatch = useDispatch();
  

useEffect(()=>{
const q = query(collection(db, 'pages'));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
  let todosArr = []
  querySnapshot.forEach((doc) => {
    todosArr.push({...doc.data(), id: doc.id})
  });
  dispatch(addPages(todosArr));
})
return () => unsubscribe()
},[])

  return (

    <Routes>
        <Route path="/" element={<Header/>}>  
        <Route path="/" element={<Home/>} />
        <Route path="/posts/:id" element={<PostPage/>}/>
      </Route> 
     </Routes> 

  );
};

export default App;
