import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.jsx';
import Body from './Components/Body.jsx';
import Contact from './Components/Contacts.jsx';
//import Contacts from './Components/Contacts.jsx';
import About from './Components/About.jsx';
import Interest from './Components/Intrests.jsx';
import Footer from './Components/Footer.jsx';


function App() {
  return (
    <div className="Home">
      <Home />
      <Body />
      <Contact />
      <About />
      <Interest />
      <Footer />
   </div>
  );
}

export default App;
