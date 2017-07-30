/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    foods: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { removedFoods: [] };
    this.handleRemove = this.handleRemove.bind(this);
  }

  // NOTE: We can't have any duplicate foods in the pantry, because #HackathonCodeQuality 🐨 🍵
  handleRemove(event) {
    const foodToRemove = event.target.innerHTML;
    this.setState({ removedFoods: [...this.state.removedFoods, foodToRemove] });
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {/* TODO: Style nicely (FLEXBOX, top padding, javascript grow and POP animations)*/}
          {/* eslint-disable react/no-array-index-key*/}
          {this.props.foods.map((food, index) =>
            <button
              className={s.food}
              style={{
                display: this.state.removedFoods.includes(food)
                  ? 'none'
                  : 'inline',
              }}
              key={index}
              onClick={this.handleRemove}
            >
              {food}
            </button>,
          )}
        </div>
        {/* <button onClick={process.location.reload}>Refresh foods</button> */}
      </div>
    );
  }
}

export default withStyles(s)(Home);
