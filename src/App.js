import React, { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import AddEvent from "./components/AddEvent";
import EventList from "./components/EventList";
import RegisteredEvents from "./components/RegisteredEvents";
import Chatbox from "./components/Chatbox";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => setIsChatboxOpen((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Virtual Event Management</h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        {!currentUser ? (
          <div className="flex justify-center items-center h-96">
            <Login />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-white p-6 shadow rounded">
              <AddEvent />
            </div>
            <div className="lg:col-span-2 bg-white p-6 shadow rounded">
              <EventList />
            </div>
            <div className="lg:col-span-3 bg-white p-6 shadow rounded">
              <RegisteredEvents />
            </div>
          </div>
        )}
      </main>

      {/* Chatbox */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbox}
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600"
        >
          {isChatboxOpen ? "Close Chat" : "Chat"}
        </button>
        {isChatboxOpen && <Chatbox />}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} Virtual Event Management. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;

