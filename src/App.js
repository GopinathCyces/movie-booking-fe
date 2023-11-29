
import { Route, Routes } from 'react-router-dom';
import './App.css';  
import Signin from './Components/Signin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<Signin/>} />
        <Route path="*" element={<Signin/>} />
      </Routes>
    </div>
  );
}

export default App;
