import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login'
import Home from './Home'

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
