import { createSlice } from "@reduxjs/toolkit";
import 'react-native-get-random-values';



const articleSlise = createSlice({
  name: 'pages',
  initialState: {
  pages: [],
  id:'',
  status: null,
  error: null,
    
  },
  reducers: {
    addPages(state, action) {
    state.status = 'resolved';
     
    console.log(action);
    console.log(state);
    if(action.payload) {
      state.pages = action.payload;
    } return state;
    
        
     },
        
  },
 
})

export const {addArticle, removeArticle,addPages} = articleSlise.actions;

export default articleSlise.reducer;