import './App.css';
import Addmovie from './Addmovie'
import Moviedata from './Moviedata';
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Switch>
        <Route exact path='/' component={Moviedata}/>
        <Route exact path='/addMovie' component={Addmovie} />
        <Route exact path='/:id' component={Moviedata}/>
      </Switch>
      </header>
      
    </div>
  );
}

export default App;
