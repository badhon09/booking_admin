import {BrowserRouter , Routes , Route,Navigate} from 'react-router-dom';
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard';
import Roomlist from './components/pages/rooms/Roomlist';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };


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
