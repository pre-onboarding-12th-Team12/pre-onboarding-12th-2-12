import { createBrowserRouter } from 'react-router-dom';
import App from 'App';
import Home from 'page/Home';
<<<<<<< HEAD
import Detail from '../page/Detail';
=======
import Detail from 'page/Detail';
>>>>>>> 751083396b8a62e9b2d2a3160d0a1fe538d040f8

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/detail/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: 'NotFound',
  },
]);

export default router;
