import { Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Admin from '../pages/Admin';
import Home from '../pages/Home';
import { Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/Login';

function Routes({ props }: any) {
  return (
    <Switch>
      <PrivateRoutes path="/" exact component={Login} />

      <Layout {...props}>
        <PrivateRoutes path="/home" exact component={Home} isPrivate />
        <PrivateRoutes path="/admin" exact component={Admin} isPrivate />
      </Layout>
    </Switch>
  )
}

export default Routes