import React, { Component } from 'react';
import Radium from 'radium';
import { v4 } from 'uuid';
import {
  STAR_REPOSITORY,
  UNSTAR_REPOSITORY
} from '../../actions/queries';
import { Mutation } from 'react-apollo';
import { styles } from '../styles/styles';

class RepoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarred: this.props.repository.viewerHasStarred,
      stargazers: this.props.repository.stargazers.totalCount
    }
  }


  render() {
    const { id, viewerHasStarred } = this.props.repository;
    let { stargazers } = this.state;
    const { isStarred } = this.state;

    const addStarLoading = <div style={ styles.gazers }>Sending the star...</div>;
    const removeStarLoading = <div>Removing the star...</div>;
    const errorDiv = err => <div className='error'>{ err.message }</div>;

    const mutation = starred => {
      if (!starred) {
        return <Mutation mutation={ STAR_REPOSITORY } variables={{ id }}>
          {(addStar, { data, loading, error }) => {
            if (loading) return <div>{ addStarLoading }</div>
            if (error) return errorDiv(error);
            if (data) {
              if (isStarred) stargazers--;
            }

            return (
              <div style={ styles.starring }>
                <div style={ styles.gazers }>Stargazers: { stargazers }</div>
                <button onClick={ addStar }
                  style={ styles.button }
                  key={ v4() }>
                  STAR
                </button>
              </div>
            )
          }}
        </Mutation>
      } else {
        return <Mutation mutation={ UNSTAR_REPOSITORY } variables={{ id }}>
          {(removeStar, { data, loading, error }) => {
            if (loading) return <div>{ removeStarLoading }</div>;
            if (error) return errorDiv(error);
            if (data) {
              if (!isStarred) stargazers++;
            }

            return (
              <div style={ styles.starring }>
                <div style={ styles.gazers }>Stargazers: { stargazers }</div>
                <button onClick={ removeStar }
                  style={ styles.button }
                  key={ v4() }>
                  UNSTAR
                </button>
              </div>
            )
          }}
        </Mutation>
      }
    }
    
    return (
      <li style={ styles.repoListItem }>
        <h2 style={ styles.itemHeader }>{ this.props.repository.name }</h2>
        <h5 style={ styles.url }><a href={ this.props.repository.url }
          style={ styles.hover }>
          { this.props.repository.url }
        </a></h5>
        { mutation(viewerHasStarred) }
      </li>
    )
  }
}

export default Radium(RepoListItem);
