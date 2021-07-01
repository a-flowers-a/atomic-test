import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from './views/Landing';
import ContactForm from './views/ContactForm';

function App() {
  return (
    <div className="App">
      <Router>
              <Switch>
                  <Route path="/" exact component={() => <Landing />} />
                  <Route path="/form" exact component={() => <ContactForm />} />
              </Switch>
      </Router>
    
    </div>
  );
}

export default App;
