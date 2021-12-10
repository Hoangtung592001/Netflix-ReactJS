import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignUp, SignIn} from './pages';
import { IsUserRedirect, ProtectedRoute } from './helper/routes';
import { useAuthListener } from './hooks';
function App() {
  const user = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Routes>
        <Route exact path={ROUTES.SIGN_UP} element={
          <IsUserRedirect user={user} LoggedInElement={ROUTES.BROWSE}>
            <SignUp />
          </IsUserRedirect>
        }/>
        <Route exact path={ROUTES.HOME} element={
          <IsUserRedirect user={user} LoggedInElement={ROUTES.BROWSE}>
            <Home />
          </IsUserRedirect>
        }/>
        
        <Route exact path={ROUTES.SIGN_IN} element={
          <IsUserRedirect user={user} LoggedInElement={ROUTES.BROWSE}>
            <SignIn />
          </IsUserRedirect>
        }/>
        <Route exact path={ROUTES.BROWSE} element={
            <ProtectedRoute user={user}>
              <Browse />
            </ProtectedRoute>
          }
        />
        
      </Routes>
    </Router>
  )
}

export default App;
