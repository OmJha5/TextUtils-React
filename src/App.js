import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  return (

      <>
        <Navbar title = "TextUtils" home = "Home" link = "About" />
        {/* <div className="container">
          <TextForm heading = "Enter the Text to Analyze" />
        </div> */}

        <div className="container">
            <About/>
        </div>

      </>
  );
}

export default App;
