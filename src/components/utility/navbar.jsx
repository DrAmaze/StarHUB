import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <navbar>
        <div>
          <button>
            Starred
          </button>
        </div>

        <div>
          <input type='text'
            placeholder='Search'>
          </input>
        </div>
      </navbar>
    )
  }
}

export default Navbar;