import { NavLink, Route, BrowserRouter as Router, Routes, } from 'react-router-dom'

import Header from './components/header';
import Home from './components/home';
import Login from './components/login';
import { selectIsauthenticated } from './redux/slice';

function App() {

  const isAuthenticated = selectIsauthenticated
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
