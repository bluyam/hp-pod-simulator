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
import firebase from 'firebase';
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
    firebase.database().ref('pods/0').set({
      foodCount: 8 - this.state.removedFoods.length - 1, // 🐨 🍵
      lat: 41.89624,
      long: -87.654927,
      name: 'Chicago Station Pod',
    });
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
      </div>
    );
  }
}

export default withStyles(s)(Home);
