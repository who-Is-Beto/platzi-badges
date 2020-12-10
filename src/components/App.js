import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/badges';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from './notFound';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer'


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route exact path="/badges/:badgeId/" component={BadgeDetailsContainer} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App