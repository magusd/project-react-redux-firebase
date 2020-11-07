import { BrowserRouter } from "react-router-dom";
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar/>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
