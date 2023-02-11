import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { json } from "../api/index.json";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const uuid  = uuidv4();


const baseUrl = "http://localhost:3001/posts/";

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function(_,{rejectWithValue}){
    
    try{
      const response = await fetch(baseUrl);
    const data = await response.json();

    if(!response.ok){
      throw new Error('Server Error!');
    }
    return data;
  
    } catch(error){
       return rejectWithValue(error.message);
    }
  }
)

const todoSlise = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    id:uuid,
    status: null,
    error: null,
    
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
       state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  },
    extraReducers:{
    [fetchTodos.pending]: (state,action) => { 
     state.status = 'loading';
     state.error = null;
    },
     [fetchTodos.fulfilled]: (state,action) => {
      state.status = 'resolved';
      state.todos = action.payload;
    },
      [fetchTodos.rejected]: (state,action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },

    
  },
})

export const {addTodo, removeTodo, toggleTodoComplete, updateArticle, count} = todoSlise.actions;

export default todoSlise.reducer;