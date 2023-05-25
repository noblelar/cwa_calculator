import React, {Component} from 'react';
import './App.css';
import Courses from '../components/Courses';
import Calcapp from '../components/Calcapp';


class App extends Component {
 
  render() {
    return (
      <div className='pa4'>
        <Calcapp />
      </div>
    );
  }
}

export default App;
