import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeEvent, unregisterUser } from '../features/eventSlice';

function AdminPage() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.allEvents);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Page: Manage Events</h2>
      {events.map((event, index) => (
        <div key={index} className="border p-4 rounded mb-4 shadow">
          <h3 className="text-lg font-bold">{event.title}</h3>
          <button
            onClick={() => dispatch(removeEvent(event))}
            className="bg-red-500 text-white px-2 py-1 rounded mr-2"
          >
            Delete
          </button>
          <button
            onClick={() => dispatch(unregisterUser(event))}
            className="bg-yellow-500 text-white px-2 py-1 rounded"
          >
            Unregister All
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;

