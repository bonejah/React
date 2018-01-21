import React from 'react';
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from './app'
import AuthOrApp from './authOrApp'
import DashBoard from '../dashboard/dashboard'
//import DashBoard from '../dashboard2/dashboard2' // Componente sem REDUX
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp}>}> 
      <IndexRoute component={DashBoard} />
      <Route path='billingCycles' component={BillingCycle} />
    </Route>
    <Redirect from='*' to='/' />
  </Router>
)