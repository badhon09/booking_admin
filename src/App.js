import {BrowserRouter , Routes , Route,Navigate} from 'react-router-dom';
import Login from './components/pages/login/Login'
import Dashboard from './components/pages/dashboard/Dashboard';
import Roomlist from './components/pages/rooms/Roomlist';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Addroom from './components/pages/rooms/Addroom';
import Test from './Test/Test';

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
        <Route path='/' element={
          <ProtectedRoute>
              <Dashboard/>
          </ProtectedRoute>
        }/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/rooms' element={<Roomlist/>}/>
        <Route path='/rooms/add' element={<Addroom/>}/>
      </Routes>
    
    
    </BrowserRouter>
   
  );
}

export default App;
