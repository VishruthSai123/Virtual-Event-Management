import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { unregisterEvent } from '../features/eventSlice';

function RegisteredEvents() {
  const registeredEvents = useSelector((state) => state.events.registeredEvents);
  const dispatch = useDispatch();

  const handleUnregister = (eventId) => {
    dispatch(unregisterEvent({ eventId }));
  };

  if (registeredEvents.length === 0) {
    return <p className="text-gray-500">You haven't registered for any events yet.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Registered Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {registeredEvents.map((event) => (
          <div key={event.id} className="border p-4 rounded shadow">
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="h-48 w-full object-cover rounded"
              />
            )}
            <h3 className="text-lg font-bold mt-2">{event.title}</h3>
            <p className="text-gray-600">Time: {event.time}</p>
            <p className="text-gray-600">Date: {event.date}</p>
            <p className="text-gray-600">Place: {event.place}</p>
            <div className="flex justify-between items-center mt-4 gap-4">
            <button
              onClick={() => window.open(event.link, '_blank')}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              Join Here
            </button>
            <button
              onClick={() => handleUnregister(event.id)}
              className="bg-red-500 text-white py-1 px-3 mt-4 rounded"
            >
              Unregister
            </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RegisteredEvents;

