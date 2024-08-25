import React, { useState } from "react";
import { motion } from "framer-motion";

const Chat3D = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>HighChats</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
          maxHeight: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: "#4A90E2",
              color: "white",
              padding: "10px 15px",
              borderRadius: "20px",
              margin: "10px 0",
              alignSelf: "flex-end",
              maxWidth: "80%",
              wordWrap: "break-word",
            }}
          >
            {message}
          </motion.div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            marginRight: "10px",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 15px",
            backgroundColor: "#4A90E2",
            color: "white",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat3D;
