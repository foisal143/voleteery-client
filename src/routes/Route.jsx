import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import JoinApplay from '../pages/JoinApplay/JoinApplay';
import EventPage from '../pages/EventPage/EventPage';
import Login from '../pages/Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AdminLayouts from '../layouts/AdminLayouts';
import Register from '../pages/Register/Register';
import RegisteredUser from '../pages/RegisteredUser/RegisteredUser';
import AddEvent from '../pages/AddEvent/AddEvent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/total-events'),
      },
      {
        path: 'join-event/:id',
        element: (
          <PrivateRoute>
            <JoinApplay></JoinApplay>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volentars/${params.id}`),
      },
      {
        path: 'events',
        element: (
          <PrivateRoute>
            <EventPage></EventPage>
          </PrivateRoute>
        ),
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
        loader: () => fetch('http://localhost:5000/volentars'),
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayouts></AdminLayouts>,
    children: [
      {
        path: '/admin',
        element: <RegisteredUser></RegisteredUser>,
        loader: () => fetch('http://localhost:5000/register'),
      },
      {
        path: 'add-event',
        element: <AddEvent></AddEvent>,
      },
    ],
  },
]);

export default router;
