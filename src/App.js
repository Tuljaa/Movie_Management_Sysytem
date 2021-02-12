import './App.css';
import Moviedetails from './Moviedetails'
import Addmovie from './Addmovie'
import Moviedata from './Moviedata';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path='/' component={Moviedata}/>
        <Route exact path='/addMovie' component={Addmovie}/>
      </Switch>
      </header>
      
    </div>
  );
}

export default App;
