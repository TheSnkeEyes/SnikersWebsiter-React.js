
import './App.css';
import About from './component/About';
import Footer from './component/Footer';
import Main from './component/Main';
import Navbar from './component/Navbar';
import Slider from './component/Slider'
import Social from './component/Social';
import VideoSection from './component/VideoSection';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Slider/>
      <VideoSection/>
      <About/>
      <Footer/>
      <Social/>
    </div>
  );
}

export default App;
