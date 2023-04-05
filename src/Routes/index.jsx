import { useAuth } from '../hooks/useAuth';
import AdministratorRoutes from './AdministratorRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';
const Routes = () => {
  const { signed, userInfo } = useAuth();
  console.log(signed);
  if (signed) {
    return <AdministratorRoutes />;
  } else if (userInfo && !userInfo.isAdministrator) {
    return <PrivateRoutes />;
  } else {
    return <PublicRoutes />;
  }
};

export default Routes;
