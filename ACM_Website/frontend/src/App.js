import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Events from './components/pages/Events';
import Resources from './components/pages/Resources';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/login';
import Blog from './components/pages/Blog';
import Article from './StrapiUtils/containers/Article';
import Category from './StrapiUtils/containers/Category';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Events' component={Events} />
          <Route path='/Resources' component={Resources} />
          <Route path='/Login' component={Login} />
          <Route path='/Blog' component={Blog}/>
          <Route path='/SignUp' component={SignUp}/>
          <Route path='/article/:id' component={Article} exact />
          <Route path='/category/:id' component={Category} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
