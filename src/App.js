import React from 'react';
import './App.css';

import Homepage from './pages/Homepage/Homepage.component'
// import Privacy from './pages/privacy/privacy.component'
// import About_us from './pages/about/aboutMe.component'
// import Contact from './pages/contact-us/contact.component'
// import Career from './pages/contact-us/contact.component'
// import Nav_bar from './component/navBar/navBar.component'



import { Route, Switch } from 'react-router-dom';



function App() {  
  return (
    <div className="App">


 
      <Switch>
      
      <Route exact path='/' component={Homepage}/>
      

      </Switch>
    </div>
  );
}

export default App;
