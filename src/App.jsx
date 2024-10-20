import { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployDashboardComponent from './components/Dashboard/EmployDashboard';
import AdminDashboardComponent from './components/Dashboard/AdminDashboard';
import './App.css';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);  
    }
  }, []);

  const handleLogin = (email, password) => {
    
    if (email === authData.admin.email && password === authData.admin.password) {
      const adminData = { ...authData.admin, role: 'admin' }; 
      localStorage.setItem('loggedInUser', JSON.stringify(adminData));  
      setUser(adminData);  
    } 
    
    else {
      const employee = authData.employees.find(e => e.email === email && e.password === password);
      if (employee) {
        const employeeData = { ...employee, role: 'employee' }; 
        localStorage.setItem('loggedInUser', JSON.stringify(employeeData));  
        setUser(employeeData);  
      } else {
        console.log('Invalid credentials');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === 'admin' ? (  
        <AdminDashboardComponent handleLogout={handleLogout} userData={user}/>
      ) : (
        <EmployDashboardComponent handleLogout={handleLogout} userData={user} />  // Pass user data to employee dashboard
      )}
    </>
  );
}

export default App;