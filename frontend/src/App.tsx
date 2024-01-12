import React from 'react';

// css 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/App.scss';
//

// components
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MyRouter from './routers/router';
import SideBar from './components/sidebar/SideBar';
//

const App: React.FC = () => {
  return (
    <div className='root'>
      <Header />
      <div className='root__main container'>
        <SideBar />
        <MyRouter />
      </div>
      <Footer />
    </div>
  )
}

export default App;
