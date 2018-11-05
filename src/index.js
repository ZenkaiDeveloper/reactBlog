import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from  'react-router-dom';
import PostIndex from './components/post_index';
import promise from 'redux-promise'
import NewPost from './components/new_post'



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={NewPost} />
          <Route path="/" component={PostIndex} />
        </Switch>        
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
