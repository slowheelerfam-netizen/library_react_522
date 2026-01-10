import Nav from './components/Nav';
import Footer from './components/Footer';
// Change Routes to Switch
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './Pages/Home';
import Books from './Pages/Books';
import { books } from './data';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* In v5: use Switch, 'exact', and 'component' */}
          <Route path="/" exact component={Home} />
          <Route path="/books" render={() => <Books books={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
