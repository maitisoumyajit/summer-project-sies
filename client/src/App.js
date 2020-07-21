import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Signin from './components/Signin'
import Signup from './components/Signup'


const App = ()=> (
    <BrowserRouter>
      <Header />
      <main>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/signin" component={Signin}/>
              <Route component={NotFound}/>
          </Switch>
      </main>
    </BrowserRouter>
)

export default App;
