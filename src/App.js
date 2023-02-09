import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Articles from './pages/Articles';
import './App.css';
import PostPage from "./pages/PostPage";

function App() {
  return (

    <Routes>
        <Route path="/" element={<Header/>}>  
        <Route path="/" element={<Home/>} />
        <Route path="/posts/:title" element={<PostPage/>}/>
      </Route> 
     </Routes> 

  );
};

export default App;
