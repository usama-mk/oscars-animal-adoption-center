import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateCard from './Pages/CreateCard/CreateCard';
import {Redirect, Switch} from 'react-router'
import Register from './Pages/Register/Register';
import { useSelector } from 'react-redux';

function App() {
  const user= useSelector(state=> state.user.user)
  return (
    <div className="App">
      <Router>
      <Switch>
      
        <Route exact path='/'>
           {
              !user &&
              <Redirect to="/registration" />
           }
          </Route>
             
        
          <Route path="/createcard">
            <CreateCard/>
          </Route>
          <Route path="/registration">
            {/* register */}
            <Register/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
