
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Dashboard/Product';
function App() {
  return (
    <>
 
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Product/>}/>
            <Route path='products' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
