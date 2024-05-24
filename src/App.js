import './App.css';
import Gateway from './pages/Gateway';
import Home from './pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Gateway/>}/> 
        <Route path="/home" element={<Home/>}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
