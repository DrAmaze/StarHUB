import React, { Component } from 'react';

class RepoListItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     starred: this.props.repository
  //   }
  // }

  render() {
   
    return (
      <li>
        <h2>{ this.props.repository.name }</h2>
        <h5>{ this.props.repository.owner.login }</h5>
        <h5>{ this.props.repository.url }</h5>
        <div>
          Stargazers: { this.props.repository.stargazers.totalCount }
        </div>
      </li>
    )
  }
}

export default RepoListItem;
