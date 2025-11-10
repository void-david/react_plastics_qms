import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import OperatorDashboard from './pages/OperatorDashboard';
import SupervisorDashboard from './pages/SupervisorDashboard';
import type { UserRole } from './types';

function App(){
  const [userRole, setUserRole] = useState<UserRole | null>(null);

  const handleLogin = (role: UserRole) => {
    setUserRole(role);
  };

  const handleLogout = () => {
    setUserRole(null);
  }

  if(!userRole){
    return <LoginPage onLogin={handleLogin}/>
  }

  if(userRole === 'operator'){
    return <OperatorDashboard onLogout={handleLogout}/>
  }
  if(userRole === 'supervisor'){
    return <SupervisorDashboard onLogout={handleLogout}/>
  }

  return null;
}

export default App;