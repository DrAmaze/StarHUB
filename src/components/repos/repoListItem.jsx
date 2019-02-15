import React, { Component } from 'react';

class RepoListItem extends Component {
  render() {
    console.log(this.props)
    return (
      <li>
        <h2>{this.props.repository.name}</h2>
      </li>
    )
  }
}

export default RepoListItem;
