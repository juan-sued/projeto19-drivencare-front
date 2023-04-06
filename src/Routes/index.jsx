import { useAuth } from '../hooks/useAuth';
import DoctorRoutes from './DoctorRoutes';
import PatientRoutes from './DoctorRoutes';
import PublicRoutes from './PublicRoutes';
const Routes = () => {
  const { signed, userInfo } = useAuth();

  if (signed) {
    return <DoctorRoutes />;
  } else if (userInfo && !userInfo.isAdministrator) {
    return <PatientRoutes />;
  } else {
    return <PublicRoutes />;
  }
};

export default Routes;
