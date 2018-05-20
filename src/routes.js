import React from 'react';
import './App.css';
import ButtonWrapper from './components/Button'
import TablePage from './containers/TablePage'
import {Route} from 'react-router-dom';

//This is sort of like the main method for our react project
const App = () => {
  return (
    <div className ='App'>
      <main className='App-intro'>
        <Route exact path='/'  component={ ButtonWrapper } />
        <Route exact path='/table' component={TablePage} />
      </main>
    </div>
  );
}

export default App;
