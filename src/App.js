import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './views/Landing';

function App() {
  return (
    <div className="App">
      <Router>
              <Switch>
                  <Route path="/" exact component={() => <Landing />} />
                  {/*<Route path="/wordList" exact component={() => <WordList />} />*/}
              </Switch>
      </Router>
    
    </div>
  );
}

export default App;
