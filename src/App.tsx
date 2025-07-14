import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Thankyou from './pages/Thankyou';
import MusicPlayer from './components/MusicPlayer';
import ChatbotMessenger from './components/ChatbotMessenger';
import Snackbar from './components/Snackbar';

function App() {
  const [showSnackbar, setShowSnackbar] = useState(true); // Show immediately on load

  useEffect(() => {
    // Optionally, delay it slightly (e.g., 500ms) if you want a smoother effect
    const timer = setTimeout(() => {
      setShowSnackbar(true);
    }, 3000); // Change to 500 if needed

    return () => clearTimeout(timer);
  }, []);
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
        chatTitle="KnotBot💍💬"
      />
      {showSnackbar && (
        <Snackbar
          message="🫢 Psst...  the bot knows everything about the big day! Tap the icon to the right"
          onClose={() => setShowSnackbar(false)}
        />
      )}
    </div>
  );
}

export default App;
