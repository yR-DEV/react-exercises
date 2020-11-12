import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todos from './components/Todos';
import Users from './components/Users';
import Comments from './components/Comments';
import axios from 'axios';

import userGetApi from './components/useGetApi';

// NOTE THE TWO NPM PACKAGES IN THIS: 
// npm install react-router-dom axios --save

const App = () => {

  const [state, setState] = useState([]);

  // const getAPI = (resource, id) => {
  //   console.log('calling JSON placeholder API');
  //   // fetch('https://jsonplaceholder.typicode.com/todos' + resource + '/' + ((id) ? '/' : id))
  //   fetch(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}` : ''}`)
  //   .then(response => response.json())
  //   .then(json => setTodos(json));
  // }

  // useEffect is for the lifecycle methood and will execute the body on any update
  // the second argument is for other vars that you weant to execute method on it when it changes
  // it is blank here meaning that when component is loaded the api is called no other time. 

  const getAPIAxios = (resource, id) => {
    axios.get(`https://jsonplaceholder.typicode.com/${resource}${(id) ? `/${id}` : ''}`)
      .then(response => {
        setState(response.data)
      });
  }

  const clearState = () => {
    setState([]);
  }

  return (
    // fragment creates 1 root node without an extra div on the DOM
    // <Fragment>
      <Router>
        <div>

        <Link to="/">Home</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/users">Users</Link>
        <Link to="/comments">Comments</Link>

        <Switch>
          <Route exact path="/todos">
            <Todos todos={state} getAPI={getAPIAxios} clearState={clearState} />
          </Route>
          <Route path="/users">
            <Users users={state} getAPI={getAPIAxios} clearState={clearState} />
          </Route>
          <Route path="/comments">
            <Comments comments={state} getAPI={getAPIAxios} clearState={clearState} />
          </Route>
          <Route path="/">
            <p>Click on the nav links pls</p>
          </Route>
        </Switch>
        </div>
      </Router>
    // </Fragment> 
  );
}

export default App;
