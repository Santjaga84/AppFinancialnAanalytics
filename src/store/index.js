import { configureStore } from "@reduxjs/toolkit";
import articleReducer from './articleSlise';

export default configureStore({
  reducer:{
    pages: articleReducer,
  }
});