import { Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Builder from '../pages/Builder';
import Home from '../pages/Home';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/Login';

function Routes({ props }: any) {
  return (
    <Switch>
      <PrivateRoutes path="/" exact component={Login} />

      <Layout {...props}>
        <PrivateRoutes path="/home" exact component={Home}  />
        <PrivateRoutes path="/builder" exact component={Builder}  />
      </Layout>
    </Switch>
  )
}

export default Routes