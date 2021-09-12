import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Switch>
        <Route exact path="/">
          
        </Route>
        <Route path="/user/login" >
          
        </Route>
        <Route path="/user/register" >
          
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
