import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEvent } from '../features/eventSlice';

function AddEvent() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [place, setPlace] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !time || !date || !place || !link || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const newEvent = {
      id: Date.now().toString(),
      title,
      time,
      date,
      place,
      link,
      image,
    };

    dispatch(addEvent(newEvent));

    setTitle('');
    setTime('');
    setDate('');
    setPlace('');
    setLink('');
    setImage(null);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Convert to base64
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1>Add</h1>
      <div>
        <label className="block text-gray-700">Event Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Platform</label>
        <input
          type="text"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Link</label>
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full p-2"
        />
        {image && (
          <img src={image} alt="Preview" className="mt-4 h-32 object-cover rounded" />
        )}
      </div>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Add Event
      </button>
    </form>
  );
}

export default AddEvent;
