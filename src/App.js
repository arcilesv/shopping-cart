import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

//Store
import { store } from './store/store';

//Coponents
import Navbar from './components/Navbar';
import Shop from './views/Shop/Shop';
import Home from './views/Home/Home';
import Wish from './views/Wish/Wish';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/wish" component={Wish}/>
            <Route exact path="/cart" component={Shop}/>
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
