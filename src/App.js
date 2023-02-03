import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard';
import Roomlist from './components/pages/rooms/Roomlist';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/rooms' element={<Roomlist/>}/>
      </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
