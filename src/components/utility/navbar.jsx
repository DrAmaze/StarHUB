import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav>
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
      </nav>
    )
  }
}

export default Navbar;