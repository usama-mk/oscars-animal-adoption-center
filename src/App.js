import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateCard from './Pages/CreateCard/CreateCard';
import {Switch} from 'react-router'
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
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
