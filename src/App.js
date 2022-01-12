import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useNavigate
} from 'react-router-dom';

import {
  Provider, useDispatch, useSelector
} from 'react-redux';

import {
  persistor,
  store
} from './store';

import SignIn from './users/SignIn';
import { logOut } from './store/user';
import { PersistGate } from 'redux-persist/integration/react';
import Videos from './videos/Videos';
import VideosForm from './videos/VideosForm';
import HomePage from './Home';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Layout from "./components/Layout";
import SignUp from './users/SignUp';
import AppRoutes from './routes/AppRoutes';



function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
          <PersistGate loading={null} persistor={persistor}>
            <AppRoutes></AppRoutes>
          </PersistGate>
          </Layout>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
