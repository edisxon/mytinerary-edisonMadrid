import { configureStore } from "@reduxjs/toolkit";
import itineraryReducer from "./reducers/itineraryReducers";


const store = configureStore({
    reducer: {
      itineraries: itineraryReducer,
    },
  });


  export default store