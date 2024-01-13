import './App.css';
import Home from './Pages/Home.js';
import Journey from './Pages/Journey.js';
import Projects from './Pages/Projects.js';
import TechStack from './Pages/Techstack.js';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/journey" component={Journey}/>
          <Route path="/techstack" component={TechStack}/>
          <Route path="/project" component={Projects}/>
        </Switch>
     </Router>
     
    </div>
  );
}

export default App;
