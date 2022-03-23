import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';
import Vendors from './Pages/Vendors/Vendors/Vendors';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Login></Login>
          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>
          <Route path='/vendors'>
            <Vendors></Vendors>
          </Route>
          
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
