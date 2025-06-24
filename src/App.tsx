import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Events from './pages/Events';
import Journey from './pages/Journey';
import Gallery from './pages/Gallery';
import Thankyou from './pages/Thankyou';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
      <Header />
      {/* Changed padding top to pt-10 */}
      <Home />
      <Events />
      <Journey />
      <Gallery />
      <Thankyou />
      <MusicPlayer />
    </>
  );
}

export default App;
