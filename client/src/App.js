import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Fib from './Fib'
import OtherPage from './OtherPage'
import './App.css';

function App() {
  return (
    <Router>    
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/other">Other</Link>
        <Route exact path="/" component={Fib} />
        <Route path="/other" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
