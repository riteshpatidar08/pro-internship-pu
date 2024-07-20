
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Product from './components/Dashboard/Product';
import PrivateRoute from './components/PrivateRoute';
import {Toaster} from 'sonner'
function App() {
  return (
    <>
 

      <div>
        <Toaster richColors position="top-center"  />
        <Routes>
          <Route element={<PrivateRoute allowedRole={['user']}/>}>
                 <Route path="/" element={<Home />}></Route>
          </Route>
     <Route element={<PrivateRoute allowedRole={['admin']}/>}>
      <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Product/>}/>
            <Route path='products' element={<Product/>}/>
          </Route>
     </Route>
          
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
