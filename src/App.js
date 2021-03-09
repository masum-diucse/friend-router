import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotMatch from './Components/NotMatch/NotMatch';
import Friend from './Components/Friend/Friend';
import FriendDetail from './Components/FriendDetail/FriendDetail';

function App() {
  

  return (
    
        <Router>
          <div>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/friend/:friendId">
              <FriendDetail></FriendDetail>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotMatch></NotMatch>
            </Route>
          </Switch>
          </div>
        </Router>
    
  );
}

export default App;
