import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { getUser } from './Modules/Login/action/Login.reducer';
import { AppRoutes } from './shared/Routes/AppRoutes';
import { useAppDispatch, useAppSelector } from './shared/store/hook';

function App() {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector(( state ) => state.login );
  const [check, setCheck] = React.useState( false );
  useEffect(() => {
    document.title = 'Inicio';
    async function checkSession() {
      await dispatch( getUser());
      setCheck( true );
    }
    checkSession();
  }, [dispatch, isLoggedIn]);

  if ( !check ) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-right" />
    </>
  );
}

export default App;
