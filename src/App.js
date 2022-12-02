import './App.scss';
import React, { Component } from 'react';  
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'; 
import ListPage from './pages/listPage';
import AddCharacterPage from './pages/addCharacterPage';
import DetailsPage from './pages/detailsPage';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';

class App extends Component {  
  render() {  
    return (  
       <Router>  
           <div className="App">  
            <HeaderComponent/>
           <Routes>  
                 <Route exact path='/' element={< ListPage />}></Route>  
                 <Route exact path='/details' element={< AddCharacterPage />}></Route>  
                 <Route exact path='/add' element={< DetailsPage />}></Route>  
          </Routes>  
          <FooterComponent/>
          </div>  
       </Router>  
   );  
  }  
}  
export default App;