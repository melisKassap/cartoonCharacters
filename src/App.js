import './App.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListPage from './pages/listPage';
import AddCharacterPage from './pages/addCharacterPage';
import DetailsPage from './pages/detailsPage';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './storage/reducers';
import { initialState } from './storage/store';

const store = createStore(reducer, initialState)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App h-100">
            <HeaderComponent />
            <Routes>
              <Route exact path='/' element={< ListPage />}></Route>
              <Route exact path='/add' element={< AddCharacterPage />}></Route>
              <Route exact path='/details' element={< DetailsPage />}>

                <Route path=':id' element={<DetailsPage />} />

              </Route>

            </Routes>
            <FooterComponent />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;