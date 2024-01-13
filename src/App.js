import { NavLink, Route, BrowserRouter as Router, Routes, } from 'react-router-dom'

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import Profile from './components/profile';
import { selectIsauthenticated } from './redux/slice';
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector(selectIsauthenticated);
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
