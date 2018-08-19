import React from 'react';
import './App.css';
import ButtonWrapper from './components/Button'
import TablePage from './containers/TablePage'
<<<<<<< HEAD
import WaterQualityPage from './components/Quality'
=======
import MapPage from './components/MapPage'
>>>>>>> 07b82b4a68a8e5c7aec48f016b445b6b44e189bf
import {Route} from 'react-router-dom';
 fetch("./json.json")

.then(function(response) {
    return response.json();
})
  .then(function(myJson) {
      console.log(myJson);
  });





//This is sort of like the main method for our react project
const App = () => {
  return ( 
    <div className ='App'>
       <nav class="navbar navbar-light bg-light">
           <a class="navbar-brand" href="#">
           <img src="logoedit.png" alt="logo"></img>
           </a>
       </nav>
      {/* <header> 
        <img src="logoedit.png" alt="logo"></img>
      </header> */}
        {/* <i class="fas fa-swimmer fa-2x" id="header"> Wanderer </i>  */}
       
     
      <main className='App-intro'>
        <Route exact path='/'  component={ ButtonWrapper } />
        <Route exact path='/table' component={TablePage} />
        <Route exact path='/WaterQualityPage' component={WaterQualityPage} />
        <Route exact path='/map' component={MapPage} />
      </main>
      
      
       <footer>
        <p id="footer">DEVELOPED BY TEAM ROCKET @ 2018 <i class="far fa-thumbs-up" id="thumbup"></i></p>
        
       </footer>
      
      </div>
    
  );
}

export default App;
