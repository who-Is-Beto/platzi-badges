import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/badges';
import Layout from '../components/Layout';
//import Navar from './Navbar';
import NotFound from './notFound';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App