import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
