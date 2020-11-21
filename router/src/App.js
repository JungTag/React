import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Router, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/home';
import Profile from './components/profile';

function App() {
  return <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </nav>
    <Switch>
      <Route path={["/", "/home"]} exact>
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
