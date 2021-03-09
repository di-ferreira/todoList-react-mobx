import React from 'react';
import {Route,Switch} from 'react-router-dom'
import TodoAdd from '../pages/TodoAdd';
import TodoList from '../pages/TodoList';

const Routes:React.FC = ()=> {
  return (
    <Switch>
        <Route path="/" exact component={TodoList} />
        <Route path="/add" component={TodoAdd} />
    </Switch>
  );
};

export default Routes;
