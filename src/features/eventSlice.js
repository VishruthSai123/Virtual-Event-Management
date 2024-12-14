import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
  registeredEvents: [],
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    registerEvent: (state, action) => {
      const eventToRegister = state.events.find(
        (event) => event.id === action.payload.eventId
      );
      if (eventToRegister && !state.registeredEvents.includes(eventToRegister)) {
        state.registeredEvents.push(eventToRegister);
      }
    },
    unregisterEvent: (state, action) => {
      state.registeredEvents = state.registeredEvents.filter(
        (event) => event.id !== action.payload.eventId
      );
    },
  },
});

export const { addEvent, registerEvent, unregisterEvent } = eventSlice.actions;
export default eventSlice.reducer;
