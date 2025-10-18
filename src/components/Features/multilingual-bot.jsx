import React, { useState, useEffect, useRef } from 'react';

// A simple component for the "typing..." indicator
const TypingIndicator = () => (
  <div className="flex justify-start">
    <div className="bg-gray-200 rounded-2xl rounded-bl-sm px-4 py-2 max-w-xs">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  </div>
);

const MultilingualBotPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I am your AI assistant. Ask me anything!",
      sender: 'ai'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Ref for auto-scrolling to the bottom
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Scroll whenever messages change

  // --- The "AI" Logic ---
  // This function simulates an AI response. In a real app, you would
  // make an API call to a service like OpenAI, Google Gemini, etc.
  const generateAiResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Simple keyword-based responses
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello there! How can I help you today?";
    } else if (lowerCaseMessage.includes('how are you')) {
      return "I'm just a bunch of code, but I'm doing great! Thanks for asking.";
    } else if (lowerCaseMessage.includes('what is react')) {
      return "React is a JavaScript library for building user interfaces, especially single-page applications. It's developed by Meta.";
    } else if (lowerCaseMessage.includes('help')) {
      return "Sure! You can ask me questions about React, JavaScript, or just chat. I'm here to help!";
    } else if (lowerCaseMessage.includes('bye')) {
      return "Goodbye! Have a great day!";
    } else {
      // Default response for unrecognized input
      const defaultResponses = [
        "That's an interesting question. Let me think about it.",
        "I'm not sure I have an answer for that, but I'm learning!",
        "Could you rephrase that? I want to make sure I understand.",
        "Fascinating! Tell me more."
      ];
      return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return; // Don't send empty messages

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    // Add user message to the chat
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText(''); // Clear input field
    setIsLoading(true); // Show typing indicator

    // Simulate AI "thinking" delay
    setTimeout(() => {
      const aiResponseText = generateAiResponse(inputText);
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponseText,
        sender: 'ai'
      };
      
      // Add AI response to the chat
      setMessages(prevMessages => [...prevMessages, aiMessage]);
      setIsLoading(false); // Hide typing indicator
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevents new line on Enter
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center shadow-md">
        <h1 className="text-xl font-semibold">AI Assistant</h1>
      </header>
      
      {/* Messages Area */}
      <main className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-sm'
                  : 'bg-white text-gray-800 rounded-bl-sm shadow'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && <TypingIndicator />}
        {/* Dummy div to scroll to */}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="bg-white border-t border-gray-200 p-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-grow appearance-none bg-gray-100 border border-gray-300 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-200"
            disabled={isLoading}
          >
            Send
          </button>
        </div>
      </footer>
    </div>
  );
};

export default MultilingualBotPage;