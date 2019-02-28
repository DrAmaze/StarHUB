import React, { Component } from 'react';
import {
  STAR_REPOSITORY,
  UNSTAR_REPOSITORY
} from '../../actions/queries';
import { Mutation } from 'react-apollo';

class RepoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarred: this.props.repository.viewerHasStarred
    }
  }

  render() {
    const { id, viewerHasStarred } = this.props.repository;

    const addStarLoading = <div>Sending the star...</div>;
    const removeStarLoading = <div>Removing the star...</div>;
    const errorDiv = err => <div className='error'>{ err }</div>;

    return (
      <li>
        <h2>{ this.props.repository.name }</h2>
        <h5>{ this.props.repository.owner.login }</h5>
        <h5>{ this.props.repository.url }</h5>
        { !viewerHasStarred ? (
          <Mutation mutation={ STAR_REPOSITORY } variables= {{ id }}>
            {(addStar, { data, loading, error }) => {
              if (loading) {
                return <div>{ addStarLoading }</div>
              }
              if (error) {
                return errorDiv(error);
              }
              return (
                <div>
                  Stargazers: { this.props.repository.stargazers.totalCount }
                  <button onClick={ addStar }>
                    STAR
                  </button>
                </div>
              )
            }}
          </Mutation>
        ) : (
          <Mutation mutation={ UNSTAR_REPOSITORY} variables={{ id }}>
            {(removeStar, { data, loading, error }) => {
              if (loading) {
                return <div>{ removeStarLoading }</div>;
              }
              if (error) {
                return errorDiv(error);
              }
              return (
                <div>
                  Stargazers: { this.props.repository.stargazers.totalCount }
                  <button onClick={ removeStar }>
                    UNSTAR
                  </button>
                </div>
              )
            }}
          </Mutation>
        )}
      </li>
    )
  }
}

export default RepoListItem;
