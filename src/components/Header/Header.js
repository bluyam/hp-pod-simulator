/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>Chicago Station Pod</h1>
            <p className={s.bannerDesc}>
              <span role="img" aria-label="right-point">
                👉
              </span>
              Tapping a food simulates removing it from the pod!
              <span role="img" aria-label="left-point">
                👈
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
