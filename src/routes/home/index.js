/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable import/first */

import React from 'react';
import Home from './Home';
import Layout from '../../components/Layout';
import firebase from 'firebase';

async function action() {
  if (firebase.apps.length === 0)
    firebase.initializeApp({
      apiKey: 'AIzaSyDG_kUBA9Ui11G2_3PHC7_U4aB9U_91qew',
      databaseURL: 'https://hodgepods.firebaseio.com',
      // messagingSenderId: "<SENDER_ID>", TODO: add firebase cloud messaging credentials
    });

  const snap = await firebase.database().ref('foods').once('value');
  if (!snap) throw new Error('Failed to load food items.');
  return {
    chunks: ['home'],
    title: 'Chicago Pod Simulator',
    component: (
      <Layout>
        <Home foods={snap.val()} />
      </Layout>
    ),
  };
}

export default action;
