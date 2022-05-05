import './LandingApp.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import CustomerApp from './customer/CustomerApp';
import AdminApp from './admin/AdminApp';
import Login from './admin/adminPages/login';

function LandingApp() {

  return (
    <>
     <Router>
     <Switch>  
          <Route path="/customer"><CustomerApp /></Route>
          <Route path="/admin"><AdminApp /></Route>
          <Route path="/login"><Login /></Route>
    <div className="landing">
      <div className="main">
        <h1 className='landing-title'>Ambrosial</h1>
        <h2 className='landing-text'>I am a...</h2>
        <div className="landing-nav"></div>
          <Link to="/customer" className="customer-nav">Customer</Link>
          <Link to="/admin" className="admin-nav">Admin</Link>
          <Link to="/login" className="login-nav">Admin Login</Link>
        </div>
      </div>
    </Switch> 
    </Router>
    </>
  )
}

export default LandingApp;