
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
// import {getData} from "./services/api"

// getData();
function App() {
 
  return (
    <div className="App">
     <Header />
     <Home />
     <Footer />
    </div>
  );
}

export default App;
