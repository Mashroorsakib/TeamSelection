import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Teamdetail from './Components/Teamdetail/Teamdetail';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
<Router>
  <Switch>
  <Route exact path="/">
      <Home/>
  </Route>
  <Route path="/:teamid">
    <Teamdetail/>
  </Route>
  <Route path="*">
          <Notfound/>
      </Route>
  </Switch>
</Router>     
   
  );
}

export default App;
