import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Header';
import Mane from './components/Mane';
import Login from './components/Login';
import Register from './components/Register';
import GameInfo from './components/GameInfo';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/">
          <Mane />
        </Route>
        <Route path="/user/login" >
          <Login />
        </Route>
        <Route path="/user/register" >
          <Register />
        </Route>
        <Route path="/user/:userName" >
          <Mane />
        </Route>
        <Route path="/info/:characterName" >
          <GameInfo />
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
