import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans'
import Testimonials from './components/Testimonials/Testimonials'
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
          <Hero></Hero>
          <Programs></Programs>
          <Reasons></Reasons>
          <Plans></Plans>
          <Testimonials></Testimonials>
          <Join></Join>
          <Footer></Footer>
    </div>
  );
}

export default App;