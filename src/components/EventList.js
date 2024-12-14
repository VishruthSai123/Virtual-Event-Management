import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerEvent } from '../features/eventSlice';

function EventList() {
  const events = useSelector((state) => state.events.events);
  const dispatch = useDispatch();

  const handleRegister = (event) => {
    dispatch(registerEvent({ eventId: event.id }));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event) => (
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
            <div className="flex justify-between items-center mt-4 gap-2">
              <button
                onClick={() => window.open(event.link, '_blank')}
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                Join Now
              </button>
              <button
                onClick={() => handleRegister(event)}
                className="bg-green-500 text-white py-1 px-3 mt-4 rounded"
              >
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
