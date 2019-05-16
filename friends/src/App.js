import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import AuthenticateUserPage from './Pages/AuthenticateUserPage'
import Navigation from './components/Navigation'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Route path="/authenticateUser" component={AuthenticateUserPage} />
      </Router>
    </div>
  );
}

export default App;
