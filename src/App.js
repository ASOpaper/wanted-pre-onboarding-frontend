import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import PrivateRoutes from './PrivateRoute';
import Todo from './Todo';
import Signin from './Signin';
import Signup from './Signup';
import Error from './Error'
import IsLoginRoutes from './IsLoginRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/wanted-pre-onboarding-frontend/' Component={Home} />
        <Route path='/*' Component={Error} />

        <Route element={<IsLoginRoutes />}>
          <Route path='/signin' Component={Signin} />
          <Route path='/signup' Component={Signup} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path='/todo' Component={Todo} />
        </Route>
      </Routes>
      <nav className='home'><Link to='/wanted-pre-onboarding-frontend/'>홈으로 가기</Link></nav>
    </div>
  );
}
export default App;
