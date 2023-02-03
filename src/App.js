import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
