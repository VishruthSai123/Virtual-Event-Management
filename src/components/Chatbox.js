import React, { useState } from "react";

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, `You: ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg w-80">
      <div className="bg-blue-500 text-white p-2 rounded-t-lg">
        <h3 className="text-center font-bold">Chatbox</h3>
      </div>
      <div className="p-4 h-60 overflow-y-auto border-b border-gray-200">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <p key={index} className="text-gray-800">
              {msg}
            </p>
          ))
        ) : (
          <p className="text-gray-500">No messages yet...</p>
        )}
      </div>
      <div className="flex p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 px-2 py-1 border rounded-l focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
