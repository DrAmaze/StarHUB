import React, { Component } from 'react';

class RepoListItem extends Component {
  render() {
    return (
      <li>
        <h2>{ this.props.repo.name }</h2>
      </li>
    )
  }
}

export default RepoListItem;
