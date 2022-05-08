import React, {Component} from 'react';
import logo from '../../src/logo.svg';

class Navigation extends Component {
    render() {
        return (
          <div className="App">
              <nav className='navbar navbar-dark bg-dark p-3'>
                <a className='text-white' >
                  Orders
                  <span className='badge badge-pill bg-info ml-5'> {this.props.counter}</span>
                </a>
                <img src={logo} className="App-logo" alt="logo" />
              </nav>
              
          </div>
      
        );
    }
}

export default Navigation;