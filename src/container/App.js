import React, {Component} from 'react';
import './App.css';
import Courses from '../components/Courses';

class App extends Component {

  /*
  componentDidMount() {
    fetch(Data)
      .then(response => response.json())
      .then(rn_courses => this.setState({ robots: rn_courses }));
  }
  */
 
  render() {
    return (
      <div className='pa4'>
        <Courses />
      </div>
    );
  }
}

export default App;
