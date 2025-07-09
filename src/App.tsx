import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Thankyou from './pages/Thankyou';
import MusicPlayer from './components/MusicPlayer';
import ChatbotMessenger from './components/ChatbotMessenger';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const handleChatbotClose = () => {
    setShowChatbot(false); // Update state when chatbot closes itself
  };
  return (
    <div className="App">
      <Header />
      {/* Changed padding top to pt-10 */}
      <Home />
      <Events />
      <Journey />
      <Gallery />
      <Thankyou />
      <MusicPlayer />
      {/* Render the ChatbotMessenger component conditionally */}
      <ChatbotMessenger
        agentId="992a81f8-858f-41d6-9945-bb770faf3bfc" // <--- IMPORTANT: Replace with your actual Agent ID
        chatTitle="KnotBot - Our Wedding Whisperer 💍💬"
      />
    </div>
  );
}

export default App;
