import { Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/Login';
import Forms from '../pages/Forms';

function Routes({ props }: any) {
  return (
    <Switch>
      <PrivateRoutes path="/" exact component={Login} />

      <Layout {...props}>
        <PrivateRoutes path="/home" exact component={Home}  />
        <PrivateRoutes path="/forms" exact component={Forms}  />
      </Layout>
    </Switch>
  )
}

export default Routes