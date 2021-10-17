import { Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import Route from './Route';

import Login from '../pages/Login';

function Routes({ props }: any) {
  return (
    <Switch>
      <Route path="/" exact component={Login} />

      <Layout {...props}>
        <Route path="/home" exact component={Home} isPrivate />
        <Route path="/admin" component={Admin} isPrivate />
      </Layout>
    </Switch>
  )
}

export default Routes