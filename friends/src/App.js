import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import LogInPage from './Pages/LogInPage'
import Navigation from './components/Navigation'
import HomePage from './Pages/HomePage'
import FriendsPage from './Pages/FriendsPage'
import FriendViewPage from './Pages/FriendViewPage'
import RegisterUserPage from './Pages/RegisterUserPage'

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <hr/>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/register" component={RegisterUserPage} />
        <PrivateRoute exact path="/update" component={RegisterUserPage} />
        <PrivateRoute exact path="/friends" component={FriendsPage} />
        <PrivateRoute exact path="/friends/:id" component={FriendViewPage} />
      </Router>
    </div>
  );
}

export default App;
