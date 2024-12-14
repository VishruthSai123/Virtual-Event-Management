import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import eventReducer from '../features/eventSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    events: eventReducer,
  },
});

export default store;

