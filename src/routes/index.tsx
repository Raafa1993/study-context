import { Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';

import Login from '../pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Layout>
        <Route path="/home" exact component={Home} />
      </Layout>
    </Switch>
  )
}

export default Routes